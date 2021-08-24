
# Next holiday destination: France Overseas - Vert Outre Mer

Main README.md file [here](https://github.com/florencemezino/vert_l-outre_mer/blob/main/README.md)
View the live project [here](link)


## Testing 

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

W3C Markup Validator - `Success`
W3C CSS Validator - `Success`
JShint - `Success`

Lighthouse - [Results](assets/testing/lighthousems2_results_24-08-2021.png)

### Testing User Stories from User Experience (UX) Section

Most common paths through the website:
1. Destinations > Experiences > News > Contact
2. Destinations > Contact (via the Get in touch button) > Experiences > News


#### As a traveller / tourism profesionnal and new visitor to the website :


1. As a traveller, I want to have an overview of the French overseas destinations so that I can identify my destination options 
- Upon entering the website, travellers have an immediate idea of the purpose of the website with the list of the destinations.
- the hero image invites to travel as it is in mouvement. The mouse hover allows a nice zoom on the heading content, which give an impression of immersion within the website and the destinations per se.
- Users have 3 options :
    * Click on a destination which redirect them to the tourism office website of the destination within a new tab
    * Click on the Explore button which redirects the users to the Experiences page
    * Click on the get in touch button which redirects them to the contact page 


2. As a traveller, I want to see the upcoming events/experiences in a chosen destination so that I can organise my activities during my stay.
- Upon opening the experiences page, the user can find an interactive map. 
- Users are able to control / trigger events and activity based on the selected destination

3. As a traveller, I want to see ideas about places to stay such as guest houses so that I can meet locals and experience the destination in a authentic way.
- Users can have access to practical information thanks to the links located in the Destinations page

4. As a traveller I want to easily contact an agency so that I can have more information / advice before travelling to the destination
- User can use the contact form from the Contact page to reach out to the agency.

5. As a tourism professionnal I would like to have more online visibility so that I can attract more clients with a green mindset to my business
- Tourism professionnals can promote their activity in the Experiences page on the map 
- ourism professionnals can promote their activity via the News page

6. As a tourism professionnal I would like to have information about how to get a « Vert Outre Mer » label so that I can better promote my business and sustainable practices
- Users can use the contact form to get in touch with the agency for advice


#### As a traveller / tourism profesionnal and returning visitor to the website :

1. As a traveller, I want to see different French overseas destinations so that I can make up my mind regarding the destination to visit.
- From the first page, users can make up their mind by clicking on one of the destination to discover it. Upon clicking the page will be opened in a new tab.
- Users can have some more information about the destination when selecting a destination within the Experiences page.

2. As a tourism professionnal I would like to communicate more about my practices and would like « Vert Outre Mer » to offer to write an article about my activity on their website every semester/trimester so that I can gain visibility and show my progress in terms of sustainable tourism. 
- From the news page, users can appreciatea a list of news articles.  
- There are different types of articles : about sustainable tourism and xcompanies with green practices
- Communication will be possible and available via the newsletter option

#### Frequent User Goals

1. As a local visitors I want to see if there are any new local events/experiences organized per month so that I can participate
- By selecting one destination, a list of events appears on the map. On the event description, the date and other details about the event are mentionned.

2. As a tourism professionnal, I want to be informed about sustainabile news / actions so that I am aware of the latest sustainable trends and possibly apply them to my activity 
- User can subscribe to a newsletter thanks to a button subcribe present in the news page to stay up to date about sustainable practices.


### Manual (logical) testing of all elements and functionality on every page.

#### Destinations

1. Header / Navigation bar
- Go to "Destinations" from a desktop
- Click on the logo : we are redirected to the main page "Destinations"
- Click on a different tab of the navigation bar to check if the active tab is highlighted when clicked and visiting the related page
- Click on all destination tags and all reopens to a new tab toward the tourism office website
- Click on the "Explore" : we are redirected to the experiences page
- Click on Get in touch : we are redirected to the contact page
- Check if navigation bar is responsive on tablet and mobile. Confirm navigation bar collapses to become a toggle menu with a dropdown of the navigation links.

2. Footer
- Go to "Destinations" from a desktop
- Check if content is not hidden behind footer and is responsive.
- Click on social media links Facebook, Twitter and Instagram. The three links redirects to the respective social media.

3. Hero image
- Go to "Destination" from a desktop
- Confirm hero image is visible and responsive on all devices.
- Confirm mouse hover hero image works by zooming on content

4. Website purpose / description
- Go to "Destinations" from a desktop
- Confirm that the purpose is stated and all destinations are listed.
- Confirm the headings are responsive on all devices.

> For every point mentionned above : Repeat verification of functionality and responsiveness on mobile phone and tablet via Developer Tool,

#### Experiences

1. Header / Navigation bar
- Navbar code is identical on all html pages. Testing already completed.

2. Footer
- Footer code is identical on all html pages. Testing already completed.

3. Dropdown to select a destination
- Go to "Experiences from a desktop
- The Experiences page appears with a description , a map and a drodown menu
    - destination name remains in the field 
    - when selecting a destination the following appears simultaneously :
        * a description of the destination
        * a link to read more about the destination
        * an image of the destination
        * events/experiences markers on the map

> For every point mentionned above : Repeat verification of functionality and responsiveness on mobile phone and tablet via Developer Tool,


#### News

1. Header / Navigation bar
- Navbar code is identical on all html pages. Testing already completed.

2. Footer
- Footer code is identical on all html pages. Testing already completed.

3. Articles / News
- Go to "News" from a desktop
- Check if the title  and the image of the report article (main article) appears
- Check if the smal articles appears well with the description
- Check the quality of the content/image displayed for each article

4. Subcribe to newsletter
- Check if modal function is working :
     - Submit : fill out the form and click submist, button changed for subscribed
     - Ignore : click ignore and the button disappears


> Repeat verification of functionality and responsiveness on mobile phone and tablet via Developer Tool


#### Contact

1. Header / Navigation bar
- Navbar code is identical on all html pages. Testing already completed.

2. Footer
- Footer code is identical on all html pages. Testing already completed.

3. Contact form
- Go to "Contact" from a desktop
- Check contact form layout and colors
- Check if functionality " required field" works properly
- Check for the contact form to clear up as soon as the form if submitted with the send button
- Check if email is received via email.js

> Repeat verification of functionality and responsiveness on mobile phone and tablet via Developer Tool

## Further Testing

* The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX (using developper tool)
* A large amount of testing was done to ensure that all pages were linking correctly.
* Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## Known Bugs

* Map positionning (experiences page)
* News report article (news page)
* Broken footer on smaller device : tablet / mobile

## Feedback

If you have any feedback, please reach out to the developper of the this project Florence Mezino at florence.mezino@outlook.com 