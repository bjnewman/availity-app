# Availity Frontend Assessment Assignment 

1. The proudest single moment in my professional career was being sworn into the bar to practice law in Illinois. It was the culmination of years of intense study and effort, and having my friends and family there to celebrate with me was a moment that I will never forget. 

With that being said, I am continually grateful and proud that a few years after that accomplishment I was able to make the difficult decision to change careers, attend Dev Bootcamp, and become a developer. By 2016 I had already made a few half-hearted attempts to learn coding through part-time online courses or intro to programming books. I discovered that I did not have the time and energy to learn this stuff on my own while working long hours as an attorney. I would become extremely discouraged when reading about other self-taught programmers who were able to learn C or some other low-level language on their own as teenagers. It took a lot longer than I would usually like to admit for me to get over my own ego and realize that I was going to need to find a support system and instructors in order for me to go after this new career path. I have had many proud moments and accomplishments as a programmer since then but the decision to quit my legal career and enroll at Dev Bootcamp was one of the most important moments in my life.

2. I recently read an [introduction](http://2ality.com/2018/04/type-notation-typescript.html) to Typescript's static type notation that I thought was excellent and would recommend as a useful resource for beginners. I would also recommend it as an example of excellent technical writing even for those already familiar with the subject matter. 

The author of the above linked blog post does an excellent job of being very detailed and thorough in his writing, which has the effect of allowing his posts to also serve as useful references. I have many of his Javascript posts bookmarked and refer to them often. I think one of the most powerful techniques he uses in his writing is to explicitly state the goal of the article at the beginning - "After reading this post you should be able to understand what the following code means..." and then revisiting at the end to reinforce the learning objective. 

I have recently developed an interest in learning more about Typescript and type-checking in Javascript more generally. Working with React's prop-types library was my first introduction to the topic, and I have found it to be a very powerful tool in improving my own code and in understanding code written by others. 

By making more of the unseen assumptions about my code more explicit type-checking helps to reduce certain kinds of errors that are difficult to debug. It also forces me to be more thoughtful about code as I am working on it which I find also generally increases my enjoyment while coding.

For all these reasons I strongly recommend the linked post.

3. Availity is a software company that helps doctors, hospitals and insurance companies. By building tools that make it easier for health care providers to operate their business Availity allows those people to focus on what they do best, which is to provide excellent care to patients. 

4. 
```javascript
function balancedParens(str) {
	// psuedo code, input is a string, we iterate through the string checking 
	// for opening '(' and closing ')' parenthesis. If the number of each type 
	// is equal we will return true unless we encounter a closing parenthesis 
	// before a corresponding open i.e. '(())' is valid but '())(' is not 
	let counter = 0;
	for ( var i in str ) {
		if ( str[i] == '(' ) {
			// increment counter if opening parens
			counter ++;
		} else if ( str[i] == ')' ) {
			// decrement counter if close parens
			counter --
		}
		// before next loop check if counter is negative, if yes then too many close 
		if ( counter < 0 ) return false;
	}
	// after loop if more opens than close is unbalanced
	if ( counter > 0 ) return false;
	return true;
}
```

5. The registration form is available to view at https://bjnewman.github.io/availity-app/
