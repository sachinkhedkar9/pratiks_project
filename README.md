# pratiks_project
Pratik's project for his landlord.


Initial stage
Deadline - March 4, 2016

Things to do :
1. Select a free web template from web
2. create geolocation example ready
3. create carousel
4. dump the sample data


## Guys do not commit anything directly to master.
### Follow the below steps to commit..

*(For the first time)*
#### 1. clone the repository

		git clone https://github.com/sachinkhedkar9/pratiks_project.git
		cd pratiks_project
		git status

git status to check if the repository is cloned or not


#### 2.  pull the required branch

		git pull origin <desired-branch-name>
		git status

by default the selected branch will be master
verify if the branch is created of not.

		git branch

to verify the current working/active branch

*(working in branches)*
#### 3.  verify current working/active branch
		
		git branch
if you want to switch between branches use

		git checkout <branch-name>



#### 4.  create a new branch

		git checkout -b <new-branch-name>

*NOTE:* above command creates a new branch based on your current branch. Like for ex. if you are currently on xyz-branch and you checkout a new abc-branch. Then abc-branch will have all commits from xyz-branch. 
The best practice for creating a new branch is creating the branch based on master. Steps as follows,


		git checkout master
		git pull origin master
		git checkout -b <new-branch-name>

#### 5. check for the changed files

		git status

#### 6.  check the differences made in the files

		git diff
shows all changed files in the project

		git diff <folder-name>
shows the diff for the mentioned folder

		git diff <file-name>
shows the diff for the particular file

#### 7. to remove the changes made in whole file
	
		git checkout <file-name>
undo the changes of the file

		git checkout <folder-name>
undo the changes of all files in the mentioned folder

		git checkout .
undo all the changes of the project

#### 8.  adding the files for committing
	
		git add <file1, file2, ..., file_n>
adds mentioned files

		git add .
adds all changed files excluding removals

		git add -u
adds updated files

		git add -a
adds all files including removals

#### 9. taking the changes from the server.

		git pull --rebase origin master
take the latest changes from the master branch on the server.


#### 10.  commit with message

		git commit -m 'some short description message'
commits all the files added..


#### 11.  merging/sqaushing

		git rebase -i <base-commit-id-on-which-you-want-to-rebase>

eq. after 		
		
		git log

		commit 1232123132131232
		author: Some name 1
		
			some message 1		

		commit 656556565656565
		author: some name 1

			some message 2

		commit 555555555555555
		author: some name 2

			some message 3

then if you run command 

		git rebase -i 555555555555555

a page will open asking for which commits to squash
change the file like
	
		pick 5555555 some message 1
		squash 6556565 some message 2
		squash 1231231 some message 3

save and close the file.
again a new file will open and ask for the commit message to keep.
although if you just close this file, all the messages for the previous commits will appear. Like,

		git log
		commit 123123123123
		author: some name 1

			some message 1

			some message 2

		commit 555555555555
		author: some name 2
			
			some message 3			

you can change the messages or keep some messages or create a new message. Comment the message(s) that are not needed. Like,


		# commit message 1
		# commit message 2
		added new message


save and close the file

result would be like

		git log
		commit 123123123123
		author: some name 1

			added new message
		
		commit 555555555555
		author: some name 2
			
			some message 3	


result would be like

		git log

		commit 1232123132131232
		author: some name 1

		commit 555555555555555
		author: some name 2

 
#### 12.  push the changes to the branch *(most-important)*

		git push origin <branch-name>
	
this will push the committed changes to the server on the specified branch.

*NOTE:* After rebasing in any sense, normal push will not work. You have to forcefully push the commit.

		git push -f origin <branch-name>
		
