# AI-Enhanced Automation QA — Process Notes

**Friday 13.02.2026 — 2.5 hours**

## Overview

1. Thought about overall repo structure and test strategy:
   - Positive vs negative testing  
   - Keeping tests readable and maintainable  
2. Created a GitHub repository, cloned it locally, and initialized Playwright with TypeScript.
3. Decided to start with automation instead of writing detailed test cases, because interacting with the real form helps uncover validations, edge cases, and what is practical to automate.
4. Manually set up the basic project structure and planned to create Page Objects myself to fully understand the codebase.
5. Chose to use AI mainly for repetitive tasks (generating tests, ideas, refactoring), while keeping ownership of architecture and logic.

## Observations

6. Password field indicates *weak password* even after entering a strong one. Also noticed that all inputs are not limited in terms of inputs legths.
7. **“Start trending”** button is disabled even though all required fields are populated.

## AI / Prompt Work

8. Started working on a TypeScript prompt to help me add and refactor code.
9. Downloaded transcript by The PrimeTime regarding SOLID principles:  
   https://www.youtube.com/watch?v=TT_RLWmIsbY&pp=ygUUdGhlIHByaW1lIHRpbWUgc29saWQ%3D
10. Pasted my testing Python prompt (used for KrakenTrades) together with transcript into generative AI model (ChatGPT).
11. Made adjustments and activated the prompt to enforce strict coding policy.
12. Was thinking to implement Field object model but seems it would be an overkill for this showcase. In case of grids where there are columns different columns for each module I would implement this.
13. Realized the prompt is insufficient. Testing it with multiple gen AI models (Gemini, ChatGPT)
14. The prompt is: Rate strictly this prompt in terms of gen AI effitiency, Prompt: 'Prompt text'. Then check both models output if the suggestions seems valid and I refactor the prompt.
15. Realized my prompt 'Rate strictly this prompt in terms of gen AI effitiency, Prompt: 'Promp text' is insufficient. Replaced my subjective prompt rating with evaluation focused on determinism and hallucination resistance.
16. Created llm-prompt-auditor and audited my typescript prompt

## First tests
17. Created 2 tests (emailValidation.spec, register.required.spec)
18. Just realized there is no test ID for the form base elm. Have to look in the whole page (Flaky, slower approach)

**Saturday 14.02.2026 - 7 hours**

## 🐜 First Task: Analysis & Strategy

19. Now when I have few running tests I am going to think about all the possible positive and negative test scenarios.
20. 20 mins I was brainstorming and testing everything I could related to the form. I was recordnig myself talking. I did some screenshots and recorded a video. I am now going to work with gen AI. I will provide it the evidence so I can extract the polished notes regarding all the problems that I have discovered.
21. Now I am going through the AI generated QA report and seeing duplications. I want the report to be conciese. Refactoring.
22. Updated the report to be accurate.
23. Battling a bit with ChatGPT. Did not follow my instructions. Had to open new window for clear context.
24. Finalized the QA report. I am now satisfied with the findings ordered by severity and with the final layout.

## 🐜 Second Task: Test Scenarios
25. ChatGPT helped me with creating the test scenarios based on the report document. I am going to check it now.
26. ChatGPT created the test cases focusing on the actual bugs rather the user / customer needs. Needs refactoring
27. Adding segments to test scenarios for better readability
28. Checking with ChatGPT based on the screenshots if I covered everything seems that some scenarios are still missing. Finalized the test scenarios

## 🤖 Third Task: Test Implementation
29. I activated the TS prompt in chat-GPT. Provided: test scenarios, whole registration page HTML, existing TS code. Will proceed with creating the tests. Prompted: update the repo source code and cover all the CRITICAL scenarios
30. Refactoring the tests. Applying best testing standards. Asking chatGPT to provide me a command to create all the test cases in terminal
31. Distinguishing between positive and negative cases
32. Created TS config to use absolute imports
33. Updated global timeout for playwright
34. Created all the tests.
35. Used Codex for repo code polishment and creating README

**Saturday 14.02.2026 - 3 hours**
36. Yesterday and today I was debugging why the tests are flaky. I used to have checks in fixtures after use in teardown. Then I realized the use is similar to yield in pytest fixtures. When I moved the checks in the setup phase tests started to fail. I did not know why. Now I know that the checks are correctly placed and I have to run the tests with max 3 workers. 6 workers seems like overkill.
37. Commiting the refactored fixtures and main POM.

## Fourth Task: Automation vision
### 1st question: What should an automation tester do to fully utilise the AI potential and become significantly more efficient?
- Learn to think in context similar to how AI processes information.
- Understand how prompts are interpreted and how deterministic structure improves results.
- Be aware of the probabilistic nature of LLMs before prompting. 
- Maybe later in upcoming years become a cyborg to reduce latency and improve overall efficiency.

### 2nd question: How should a modern QA team change their workflow today to be ready for this future?
- Embrace AI tools, but avoid blind dependency.
- Compare and validate outputs across multiple models.
- Contemplate workflows are prone to error or are repetitive and suitable for AI.
- Contemplate which approaches remain future-proof as AI progress accelerates.
- Preserve human review for critical decisions.

### 3rd question: If AI handles coding and regression, what is the primary value add of a Human QA Engineer in the agentic future?
- Emotional understanding of users
- Imagination
- Grounded reasoning
- Evaluating overall system efficiency
- Maybe human mistakes also as the unexpected outcomes could reveal hidden potentials or better understanding of the product itself.
