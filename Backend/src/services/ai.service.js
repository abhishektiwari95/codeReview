const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



// const prompt = "Does this look store-bought or homemade?";
 

// const result = await model.generateContent(prompt);
// console.log(result.response.text());


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}


module.exports = generateContent
