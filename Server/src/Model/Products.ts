import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    reviewBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    review: {
        type: String,
        required: true
    },
    size: {
        type: String,
    },
    style: {
        color: String,
        image: String,
    },
    fit: {
        type: String,
    },
    images: [],
    likes: [],
});

const products = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        category: {
            type: mongoose.Schema.ObjectId,
            required: false,
            ref: "categories",
        },
        subCategories: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "subCategory",
            },
        ],
        details: [
            {
                name: String,
                value: String,
            },
        ],
        questions: [
            {
                question: String,
                answer: String,
            },
        ],
        reviews: [reviewSchema],
        refundPolicy: {
            type: String,
            default: "30 days",
        },
        rating: {
            type: Number,
            required: false,
            default: 0,
        },
        numberReviews: {
            type: Number,
            required: false,
            default: 0,
        },
        shipping: {
            type: Number,
            required: false,
            default: 0,
        },
        subProducts: [
            {
                sku: {
                    type: String,
                },
                images: [],
                description_images: [],
                color: {
                    color: {
                        type: String,
                    },
                    image: {
                        type: String,
                    },
                },
                sizes: [
                    {
                        size: String,
                        qty: Number,
                        price: Number,
                    },
                ],
                discount: {
                    type: Number,
                    default: 0,
                },
                sold: {
                    type: Number,
                    default: 0,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const productSchema = mongoose.model("products",products);

export default productSchema;