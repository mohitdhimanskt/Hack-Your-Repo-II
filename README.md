4. PROJECT: Hack Your Repo II

The assignment this week is to enhance your application to look similar to the following:

UI Example

As you can see, it looks different from the one from last week. This week we'll be rewriting most of our code to now show information for a single repository and also list its contributors (instead of the details for all repositories). A user should be able to search for all repositories in the account and select the one they want more information on.
Week 2 Assignment

The enhanced application should fulfill the following requirements:

    The list of repositories in the select element should be sorted (case-insensitive) on repository name.
    At start-up your application should display information about the first repository as displayed in the select element.
    When the user changes the selection, the information in the web page should be refreshed for the newly selected repository.
    You should be able to click on the repository name of the selected repository to open a new browser tab with the GitHub page for that repository.
    You should be able to click on a contributor to open a new browser tab with the GitHub page for that contributor.
    Your UI should be responsive. Try it with Chrome Developer Tools in the browser, using a mobile phone format and a tablet format, portrait and landscape.
    The XMLHttpRequest in the fetchJSON function should be replaced with fetch. Hint: Because fetch returns a promise out of the box there is no need create a Promise yourself with new Promise(...).

Hints:

    The index.html file can be divided into several components:
        An HTML select element from which the user can select a HYF repository. This select element must be populated with option elements, one for each HYF repository.
        A left-hand column that displays basic information about the selected repository.
        A right-hand column that displays a list of contributors to the repository.

    A suggested HTML structure could be:

    <body>
      <div id="root">
        <header class="...">...</header>
        <main class="main-container">
          <section class="repo-container">...</section>
          <section class="contributors-container">...</section>
        </main>
      </div>
    </body>

    Add one option element per repository to the select element, where each option element has the array index of the repository as its value attribute and the name of the repository as its text content:

    <select>
      <option value="0">alumni</option>
      <option value="1">angular</option>
      <!-- etc -->
    </select>

    To sort the list repositories use .sort() and .localeCompare().
