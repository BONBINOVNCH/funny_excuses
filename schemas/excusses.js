const mongoose = require("mongoose");

const ExcuseSchema = new mongoose.Schema({
    situation: {
        type: String,
        required: [true, "Ситуація обов’язкова"],
        trim: true,
        maxlength: [100, "Опис ситуації занадто довгий"],
    },

    excuseText: {
        type: String,
        required: [true, "Текст відмазки не може бути порожнім"],
        minlength: [5, "Відмазка занадто коротка, бос не повірить"],
    },

    category: {
        type: String,
        enum: {
            values: [
                "absurd",
                "tech",
                "family",
                "transport",
                "health",
                "creative",
            ],
            message: "{VALUE} не є валідною категорією",
        },
        default: "absurd",
    },

    riskLevel: {
        type: String,
        enum: {
            values: ["low", "medium", "high"],
            message: "{VALUE} не є валідним рищиком",
        },
        default: "low",
    },
});

ExcuseSchema.index({ category: 1 });

module.exports = mongoose.model("Excuse", ExcuseSchema);
