# feelmealproject

When you go to the homepage, you're asked to log in through Google+. When you do so, your details will be added to the Users collection on MLab. 
Once you're at the homepage, you'll see all the tags the app offers. Clicking on each image should take you to another page and display the relevant information. (Since we didn't have all the data from the designer, we only made the meat category).

Now you're inside the meat category, you'll see the Order now button and the like button on each meal.
So far the app has your login details saved. So, when you click on any like button on any meal, the app will save the ID number of this meal to your favorites. The ID will be saved to the user's document in MLab as an array. Clicking on the like button again will remove the meal's ID from the user's favorite dishes.

PS, we didn't use Ajax in this function, which means when you click on the like button on each meal, you're required to refresh your page so the like button turns red. (although the data is moved to mLab without having to refresh).


Clicking on Order now will set a countdown timer for when exactly the meal should be ready.

Clicking on the icon on the top right will open a pop up menu with all the tags available on FeelMeal. When clicking on one of the tabs, it'll change its content to "COMING SOON" using JS.

JSON files:

'https://feelmealws.herokuapp.com/getTagsData': This URL displays the full JSON file of the tags
    
'https://feelmealws.herokuapp.com/getTagsDetails': This URL displays the whole meat meals data.

POST:
'http://feelmealws.herokuapp.com/profile': If you use Postman, you can use this URL to push a new user to the mLab.

'http://feelmealws.herokuapp.com/addLike': This URL adds the meal's ID to the user's favorite meals array.

