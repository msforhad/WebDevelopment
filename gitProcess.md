✅ Step-by-Step: VS Code Theke GitHub e Code Push Korar Full Process <br>

🧱 Step 1: GitHub Repo Create Koro <br>

1.GitHub e jao → https://github.com/ <br>
2."New repository" e click koro <br>
3.Repository name dao (e.g., MyReactProject) <br>
4.README / .gitignore check korona <br>
5.Create repository button e click koro <br>
6.Repo URL copy koro (e.g. https://github.com/msforhad/MyReactProject.git) <br>

📁 Step 2: VS Code e Project Folder Open Koro <br>
VS Code e jei folder push korte chau, seta open koro. <br>

🧰 Step 3: Git Initialize Koro <br>
Terminal e:bash <br>
git init <br>

📄 Step 4: .gitignore File Create Koro (for React / Node projects) <br>
Terminal e:bash <br>
npx gitignore <br>

➕ Step 5: File Add & Commit Koro <br>
Terminal e:bash <br>
git add . <br>
git commit -m "Initial commit" <br>

🔗 Step 6: GitHub Repo Link Koro <br>
Terminal e:bash <br>
git remote add origin https://github.com/msforhad/MyReactProject.git <br>
(Replace URL with your own repo URL.) <br>

🚀 Step 7: Push Koro <br>
Terminal e:bash <br>
git push -u origin main <br>

If you get the hint: Updates were rejected error, then: <br>
Terminal e:bash <br>
git pull origin main --allow-unrelated-histories <br>
git push -u origin main <br>

Or  <br>

force push (if you're sure): <br>
Terminal e:bash <br>
git push -u origin main --force <br>

#------single file add korar process----------- <br>

git add index.html <br>
git commit -m "Add index.html file" <br>
git push -u origin main <br>


#--------🔄 Updated file GitHub-e push korar full process:------- <br>

✅ Step 1: Project Folder-e Jao (Terminal diye) <br>

cd path/to/your/project <br>
In your case: <br>
cd Projects/CompletProject/HtmlCssProject/e-school <br>

✅ Step 2: Git Status Check (optional) <br>
git status <br>
Ekhane dekhabe je index.html modified. <br>

✅ Step 3: File Add Koro <br>
git add index.html <br>

Ba sob file ekshathe add korte: <br>
git add . <br>

✅ Step 4: Commit Koro <br>
git commit -m "Updated index.html" <br>

✅ Step 5: Push Koro GitHub-e <br>
git push <br>