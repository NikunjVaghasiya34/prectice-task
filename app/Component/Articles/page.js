import Image from 'next/image';
import './Articles.css';

const articlesData = [
    {
        id: 1,
        image: "/images/Article_one_image.jpg",
        title: "The Ultimate Guide to Full-Body Workouts",
        description: "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for...",
        author: "By Alex Carter",
    },
    {
        id: 2,
        image: "/images/Article_two_image.jpg",
        title: "5 Tips for Better Cardio Sessions",
        description: "Improve your cardio performance with these simple yet effective techniques to maximize...",
        author: "By Maya Lee",
    },
    {
        id: 3,
        image: "/images/Article_three_image.jpg",
        title: "Meal Prep Basics for Gym Enthusiasts",
        description: "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consi...",
        author: "By Jordan Smith",
    },
    {
        id: 4,
        image: "/images/Article_four_image.jpg",
        title: "Building Core Strength: Exercises and Benefits",
        description: "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your...",
        author: "By Emma Rodriguez",
    },
];


export default function Articles() {
    return (
        <div className="articles-div">
            <div className="articles">
                <h2>Related articles</h2>
                <div className="articles-container">
                    {articlesData.map((article) => (
                        <div key={article.id} className="article-item">
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={228}
                                height={228}
                            />
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <span>{article.author}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}