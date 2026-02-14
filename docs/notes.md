# AI-Enhanced Automation QA — Process Notes

**Friday 13.02.2026 — 17:15–19:55**

## Overview

1. Thought through overall repo structure and test strategy:
   - Positive vs negative testing  
   - Smoke vs validation  
   - Keeping tests readable and maintainable  
2. Created a GitHub repository, cloned it locally, and initialized Playwright with TypeScript.
3. Decided to start with automation instead of writing detailed test cases upfront, because interacting with the real form helps uncover validations, edge cases, and what is practical to automate.
4. Manually set up the basic project structure and planned to create Page Objects myself to fully understand the codebase.
5. Chose to use AI mainly for accelerating repetitive tasks (generating tests, ideas, refactoring), while keeping ownership of architecture and logic.

## Observations

6. Password field indicates *weak password* even after entering a strong one. Also noticed seems all input are not limited in terms of input legths.
7. **“Start trending”** button is disabled even though all required fields are populated.

## AI / Prompt Work

8. Started working on a TypeScript prompt to help add and refactor code.
9. Downloaded transcript by The PrimeTime regarding SOLID principles:  
   https://www.youtube.com/watch?v=TT_RLWmIsbY&pp=ygUUdGhlIHByaW1lIHRpbWUgc29saWQ%3D
10. Pasted Python prompt together with transcript into generative AI model (ChatGPT).
11. Made adjustments and activated the prompt to enforce strict coding policy.
12. Was thinking to implement Field object model but seems it would be an overkill for this showcase. In case of grids where there are columns different columns for each module I would implement this.
13. Realized the prompt is insuffitient. Testing it with multiple gen AI models (Geminy, ChatGPT)
14. The prompt is: Rate strictly this prompt in terms of gen AI effitiency, Prompt: 'Promp text'. Then I go and check both models if the suggestions seems valid and I refactor the prompt.
15. Realized my prompt 'Rate strictly this prompt in terms of gen AI effitiency, Prompt: 'Promp text' is insuffitient. Replaced my subjective prompt rating with adversarial evaluation focused on determinism and hallucination resistance.
16. Created llm-prompt-auditor and audited my typescript prompt

## First tests
17. Created 2 tests (emailValidation.spec, register.required.spec)
18. Just realized there is no test ID for the form base elm. Have to look in the whole page (Flaky, slower approach)

**Saturday 14.02.2026 — 14:00-17:00**
19. Now when I have few running tests I am going to think about all the possible positive and negative test scenarious.
20. 20 mins I was brainstorming with the and testing everything I could related to the form. I was recordnign my self talking. I did some screenshots and recorded a video. I am now going to work with gen AI. I will provide it the evidence so I can extract my notes regarding all the problems that I have discovered.
