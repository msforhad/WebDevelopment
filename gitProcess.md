✅ Step-by-Step: VS Code Theke GitHub e Code Push Korar Full Process <br>

🧱 Step 1: GitHub Repo Create Koro <br>

1.GitHub e jao → https://github.com/ <br>
2."New repository" e click koro <br>
3.Repository name dao (e.g., MyReactProject) <br>
4.README / .gitignore check korona <br>
5.Create repository button e click koro <br>
6.Repo URL copy koro (e.g. https://github.com/msforhad/MyReactProject.git) <br>

📁 Step 2: VS Code e Project Folder Open Koro
VS Code e jei folder push korte chau, seta open koro.

🧰 Step 3: Git Initialize Koro
Terminal e:bash
git init

📄 Step 4: .gitignore File Create Koro (for React / Node projects)
Terminal e:bash
npx gitignore

➕ Step 5: File Add & Commit Koro
Terminal e:bash
git add .
git commit -m "Initial commit"

🔗 Step 6: GitHub Repo Link Koro
Terminal e:bash
git remote add origin https://github.com/msforhad/MyReactProject.git
(Replace URL with your own repo URL.)

🚀 Step 7: Push Koro
Terminal e:bash
git push -u origin main

If you get the hint: Updates were rejected error, then:
Terminal e:bash
git pull origin main --allow-unrelated-histories
git push -u origin main

Or 

force push (if you're sure):
Terminal e:bash
git push -u origin main --force

#------single file add korar process-----------

git add index.html <br>
git commit -m "Add index.html file" <br>
git push -u origin main <br>


#--------🔄 Updated file GitHub-e push korar full process:-------

✅ Step 1: Project Folder-e Jao (Terminal diye)

cd path/to/your/project
In your case:
cd Projects/CompletProject/HtmlCssProject/e-school

✅ Step 2: Git Status Check (optional)
git status
Ekhane dekhabe je index.html modified.

✅ Step 3: File Add Koro
git add index.html

Ba sob file ekshathe add korte:
git add .

✅ Step 4: Commit Koro
git commit -m "Updated index.html"

✅ Step 5: Push Koro GitHub-e
git push