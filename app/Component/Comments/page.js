"use client";
import { useEffect, useState } from "react";
import "./Comments.css";

export default function Comments() {
    const [comments, setComments] = useState([
        {
            name: "Kang Haerin",
            auther: "/images/Kang_Haerin.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
            date: "22 Jul 2022",
            rating: 5,
        },
        {
            name: "Kang Haerin",
            auther: "/images/Kang_Haerin.jpg",
            comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ",
            date: "22 Jul 2022",
            rating: 5,
        },
    ]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        comment: "",
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.comment) {
            alert("Please fill in all fields.");
            return;
        }

        const newComment = {
            name: form.name,
            auther: "/images/Danielle_Marsh.jpg",
            comment: form.comment,
            date: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
            rating: 5,
        };

        setComments([newComment, ...comments]);
        setForm({ name: "", email: "", comment: "" });
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
                                        <img src="/Images/Five_star.jpg" alt="Star image" width={104} height={18} />
                                        <span className="rating">(5.0)</span>
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
                                <img src="/Images/review_icon_one.svg" alt="Review icon" width={16} height={16} />
                                <img src="/Images/review_icon_two.svg" alt="Review icon" width={16} height={16} />
                                <img src="/Images/review_icon_three.svg" alt="Review icon" width={16} height={16} />
                                <img src="/Images/review_icon_four.svg" alt="Review icon" width={16} height={16} />
                                <button>
                                    <img src="/Images/review_icon_five.svg" alt="Review icon" width={16} height={16} />
                                    <p>Good</p>
                                </button>
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
