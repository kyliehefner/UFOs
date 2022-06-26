# UFOs
## Overview of the Project
### Purpose
The purpose of this project was to create a webpage that displays UFO sightings data from a javascript array in a dynamic table. Specifically, the website allows filtering of the table by multiple factors (date, city, state, country, and shape) at the same time.

## Results
### How to Perform a Search
A user can enter search criteria in the input boxes under the "Filter Search" section of the page. The table is filtered when any change is made to any of these input boxes, so the user will immediately see the filtered result when they click out of the box or press enter on their keyboard.
Multiple search criteria can be used as filters at the same time. To erase a search filter, the user can simply erase their input from the input box. Reloading the page will again show the entire unfiltered dataset.
### Example Results
![image](https://user-images.githubusercontent.com/102445183/175830237-f323d11b-c5d3-429a-8d84-420689188d33.png)
*First, filtering by date 1/11/2010. The table is updated to show all records from 1/11/2010.*

![image](https://user-images.githubusercontent.com/102445183/175830260-0cf884da-ff96-4cbe-a6a3-2996d5f9c87c.png)
*Then, adding a second filter, Florida state. The table shows only records that match with both filters.*

![image](https://user-images.githubusercontent.com/102445183/175830273-1876442d-c688-4592-89da-82fcb9106391.png)
*Finally, we can remove the date filter to get all records from the state of Florida.*

## Summary
### Drawbacks
One potential drawback of this design is that the user must input filter criteria in the exact format and spelling as is in the original data. For example, if I were to input "florida" in the state input box, no results would display because the data uses the two-letter code for states. Similarly, if I want to filter to records from the city of London, Canada, typing "london" in the city input box would yield no results since the data for that city is under "london (canada)".

### Recommendations
1. To improve the issue of strict user input, we could utilize regular expressions to accept a wider range of inputs for filtering. In Javscript, regular expressions are written with /s around the string. We could account for capitalization or additional words with regular expressions, although the state and country codes would have to be listed in order to match them with the full state and country names for filtering. An alternative method to fix the state and country input is to create drop-down menus where users can see all of the potential options.
2. To add more detail to our webpage and represent our data, we could add sections with visualizations for the distribution of the data. For example, we could make a line graph with the date on the x-axis and the number of records on the y-axis, which would show how the number of UFO sightings have varied over time. We could also add a bar graph or pie chart with sections representing the shapes of the sightings, so that users could see the most and least common shapes.
