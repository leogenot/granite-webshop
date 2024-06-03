export const theme = {
    extend: {
        fontFamily: {
            display: ['"ClashDisplay-Medium"', 'Helvetica', 'sans-serif'],
            text: ['"Inter-Light"', 'Helvetica', 'sans-serif'],
        },
        fontSize: {
            sm: "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
            base: "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
            lg: "clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
            xl: "clamp(1.56rem, 1vi + 1.31rem, 2.11rem)",
            "2xl": "clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)",
            "3xl": "clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)",
            "4xl": "clamp(3.05rem, 3.54vi + 2.17rem, 5rem)",
            "5xl": "clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)",
            "6xl": "clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)",
            "7xl": "clamp(5.84rem, 9.84vi + 3.31rem, 11.34rem)",
            "8xl": "clamp(7.18rem, 12.6vi + 3.75rem, 14.58rem)",
            "9xl": "clamp(8.84rem, 16.5vi + 4.36rem, 18.75rem)",
        }
    },
}