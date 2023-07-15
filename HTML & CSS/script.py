import subprocess

commit_message = input("Enter commit message: ")

subprocess.run(["git", "add", "."])
subprocess.run(["git", "commit", "-m", commit_message])
subprocess.run(["git", "push", "origin", "zaman"])
