"use client";
import { useEffect, useState } from "react";
import "./Comments.css";

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: "",
        rating: 5
    });
    const [success, setSuccess] = useState(false);

    // For Fetch Comment Data
    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch("/data/comments.json");
            const data = await res.json();
            setComments(data);
        };

        fetchComments();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.comment || !form.rating || form.rating == 0) {
            alert("Please fill in all fields and select a rating.");
            return;
        }

        const newComment = {
            name: form.name,
            auther: "/Images/Alex_Carter_image.jpg",
            comment: form.comment,
            date: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            rating: form.rating,
        };

        setComments([newComment, ...comments]);
        setForm({ name: "", email: "", comment: "", rating: 5 });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    // For Checking Screen Size
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                document.getElementById("submit-btn").innerText = "Send Comment";
            } else {
                document.getElementById("submit-btn").innerText = "Send";
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="comment-container">
                <h3>Comments</h3>
                {comments.map((item, idx) => (
                    <div className="comment-box" key={idx}>
                        <img src={item.auther} alt={item.name} width={60} height={60} />
                        <div className="comment-content">
                            <div className="comment-header">
                                <div className="comment-header-left">
                                    <h4>{item.name}</h4>
                                    <div className="comment-header-left-rating">
                                        <div className="comment-header-left-rating">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <img key={star}
                                                    src={star <= item.rating
                                                        ? "/Images/star-filled.svg"
                                                        : "/Images/star-empty.svg"}
                                                    alt="Star" width={15} height={15} />
                                            ))}
                                            <span className="rating">({item.rating}.0)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="date">{item.date}</div>
                            </div>
                            <p className="comment-text">{item.comment}</p>
                        </div>
                    </div>
                ))}

                <h3 className="add-comment-h3">Add A Comment</h3>
                <form className="comment-form" onSubmit={handleSubmit}>
                    <div className="form-left">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-right">
                        <div className="form-group">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="Comment Anything..."
                                value={form.comment}
                                onChange={handleChange}
                                rows={6}
                                required
                            />
                        </div>
                    </div>
                </form>

                <div className="rate-article-container">
                    <div className="rate-article">
                        <p>Rate the usefulness of the article</p>
                        <div>
                            <div className="review-icons">
                                {[1, 2, 3, 4, 5].map((star) => {
                                    const labels = { 1: "Very Bad", 2: "Bad", 3: "Average", 4: "Nice", 5: "Good" };
                                    const iconNames = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" };
                                    const isSelected = star === form.rating;
                                    return (
                                        <div key={star} className={`review-icon-div ${isSelected ? "selected" : ""}`}
                                            onClick={() => setForm({ ...form, rating: star })} >
                                            {isSelected ? (
                                                <button className={`rating-btn rating-${star}`}>
                                                    <img src={`/Images/review_icon_${iconNames[star]}.svg`}
                                                        alt={`Rating ${star}`} width={16} height={16} />
                                                    <p>{labels[star]}</p>
                                                </button>
                                            ) : (
                                                <img src={`/Images/review_icon_${iconNames[star]}.svg`}
                                                    alt={`Rating ${star}`} width={16} height={16} />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                    <button type="submit" className="submit-comment" onClick={handleSubmit}>
                        <img src="/Images/massage_icon.svg" alt="Send Comment icon" width={16} height={16} />
                        <p id="submit-btn">Send</p>
                    </button>
                </div>

            </div>

            {success && (
                <div className="comment-success-popup">
                    <img src="/Images/review_icon_five.svg" alt="Review icon" width={18} height={18} />
                    <p>Comment Submitted Successfully!</p>
                </div>
            )}
        </>
    );
}
