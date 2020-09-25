# Password-Generator

## Usage
For those who deal in sensitive data or for those who just want a strong password to provide greater security. This password generator can take the size and characters the user wants and generate a randomized code using the allowed characters to the designated length.

Through trial and error I was able to prompt the user, after a click of a button, for designated length and characters they would like to include or exclude from the password. After the user had a defined and allowed length with one character group selected, the code would create a new array with the included characters. This array is then randomly shuffled and the number of characters that match the password length is then pulled and returned in the text area.

Below are some screen shots of the working program. If you want to give it a try please feel free at 
[Password Generator](https://zach-greenberg.github.io/Password-Generator/)


![PasswordGeneratorPrompt](\img\pass.gen.question.png)

![PasswordGeneratorInvalid](\img\pass.gen.invalid.png)

![PasswordGeneratorComplete](\img\pass.gen.complete.png)

### look into
I had a problem before with adding my arrays togeather but the random generator was including the "," between all of my inputs which was puzzling.