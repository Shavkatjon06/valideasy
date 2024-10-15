# **Valideasy**

A super lightweight and flexible field validation utility for JavaScript/TypeScript. Perfect for validating request bodies, form submissions, or any object with required fields. Say goodbye to missing fields and hello to cleaner code! 🌟


# 📦 **Installation**

Get started by installing the valideasy package:
```
npm install valideasy
# Or if you're using Yarn:
yarn add valideasy
```


# 🎁 **Features**

🔍 **Simple Validation:** 
Quickly check if required fields are present and non-empty.

⚡️ **Lightweight:** 
No dependencies, blazing-fast execution.

🔧 **Flexible:** 
Easily extendable and customizable for your specific needs.


# 🚀 **Quick Start**

It’s as easy as 1-2-3! Import the **valideasy** function and validate your data in no time.

```
import valideasy from 'validate-fields';

const requestBody = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
};

const requiredFields = ['name', 'email', 'password'];
const errorMessage = valideasy(requestBody, requiredFields);
if (errorMessage) {
    console.error(`🚫 ${errorMessage}`); // Output: "🚫 password is required!"
} else {
    console.log('✅ All fields are valid!');
}
```

# **How It Works**

🧩 The validateFields function checks if the requiredFields exist in the requestBody.

⚠️ If a field is missing or an empty string, it returns an error message.

✅ If all fields are present and valid, it returns null.


# 📜 **API Reference**

valideasy(body, fields)

📝 **Parameters**

**body (Object)** - The object to validate (e.g., request body or form data).

**fields (Array<String>)** - An array of strings specifying the required fields.

🔄 **Returns**

**String** - An error message indicating the first missing field.

**null** - If all required fields are present and valid.


# 💬 **Contact**
Have questions, feedback, or suggestions? Feel free to reach out at henryjohnson04151983@gmail.com.