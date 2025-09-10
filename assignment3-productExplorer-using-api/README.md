Assignment: Product Explorer using DummyJSON API

Objective
Build a React-based Product Explorer App that fetches data from the DummyJSON API and displays
products in a clean, user-friendly interface.

Projects Requirements

Core Features
• Fetch products from: https://dummyjson.com/products
• Display product list with: Product title, Product image, Price & Rating
• Implement search functionality to filter products by name.
• Implement category filter using endpoint: https://dummyjson.com/products/category/smartphones
• Show loading indicator while fetching data.
• Handle API errors gracefully (e.g., show a message if fetch fails).

Bonus Features (Optional)
• Add dark mode toggle.
• Add pagination (?limit=10&skip=10).
• Allow users to add products to a favorites list (store in localStorage).

Suggested Project Structure
src/
├── App.js
├── App.css
├── index.js
└── components/
├── SearchBar.js
├── CategoryFilter.js
├── ProductList.js
└── ProductItem.js

API Endpoints
• All products → https://dummyjson.com/products
• Search products → https://dummyjson.com/products/search?q=phone
• Categories list → https://dummyjson.com/products/categories
• Products by category → https://dummyjson.com/products/category/laptops
• Pagination → https://dummyjson.com/products?limit=10&skip=20

          Submission Guidelines

• Upload your complete project to GitHub.
• Host your project on GitHub Pages / Netlify / Vercel.
• Submit only the GitHub repo link + hosted demo link.
• If you cannot host the project → Share the GitHub repo link and a short demo video
(screen recording).

       Deliverables

• GitHub Repository Link
• Live Demo Link (or video if hosting is not possible)

Evaluation Criteria
• API integration (fetch, search, filters working)
• Clean & responsive UI
• Code quality & folder structure
• Hosting / Demo availability

        Submission Email

Send your project links/video to: aman.k.sharma@cepialabs.in
Only send the GitHub link + working demo (or video if not hosted).

import { useSnackbar } from "notistack";

const { enqueueSnackbar } = useSnackbar();

.then((response) => {
// setImageData(response?.data?.image_url);
setImageData(response?.data?.filename);
// console.log("response data",response?.data)
enqueueSnackbar(response?.data?.message , { variant: "success" });
})
.catch((error) => {
enqueueSnackbar(error?.response?.data?.message , { variant: "error" });
// console.log(error);
// console.log(error?.response);
})

try {
const User = localStorage.getItem("user");
if (!User) {
enqueueSnackbar("Please login to Create Post !", { variant: "warning" });
navigate("/login");
return ;
}

    const parseUser =  User ? JSON.parse(User) : null;
    setUserData(parseUser);
    //setUserData(JSON.parse(User));

    // console.log("U data: ",User);
    // console.log("Parse User data: ",parseUser);
    // console.log("Parse User Id : ",parseUser.user_id);
    // console.log("user data : ",userData);

    } catch (e) {
    console.error("Failed to parse user:", e);

}

// todo assignment :

Objective
You are required to build a fully functional To-Do application from scratch using React.js. This assignment will test your understanding of React fundamentals, localStorage for persistence, Git/GitHub workflow, and problem-solving skills.

Requirements
Start from Scratch
•Do not copy code from today’s session.
•Initialize a new React project using either create-react-app or Vite.

Core Features (Mandatory)
•Add a new task.
•Mark a task as completed.
•Delete a task.
•Edit a task.
•Tasks should persist in localStorage (refresh should not clear them).

Additional Requirements
•Each task should also have a priority level (High / Medium / Low).
•Tasks should be sortable by priority.
•Add a search bar to filter tasks by name.
•Apply basic but clean styling (use CSS or Tailwind).

Bonus (Optional)
•Add a due date for each task and highlight overdue tasks in red.
•Add a dark mode toggle.

Submission Instructions
•You must use GitHub to host your project.
•Push your complete project code to a public repository.
•Share the GitHub repo link with us.

Submit to: aman.k.sharma@cepialabs.in
Rules
•Plagiarism (copy-pasting code) will not be accepted.
•Each student must write their own code.
•You are free to research solutions, but implementation must be original.

This way you’ll:
•Use React hooks, states, props, localStorage.
•Handle sorting, filtering, conditional styling.
•Practice GitHub workflow.
•Struggle a little with extra features like sorting, due dates, and dark mode.
