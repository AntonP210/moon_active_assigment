## Table of Contents

- [Files Description](#files-description)
  - [api.test.ts](#apitestts)
  - [calendar.test.ts](#calendartestts)
  - [apiClient.ts](#apiclientts)
  - [driverHelper.ts](#driverhelperts)
  - [pageHelper.ts](#pagehelperts)
  - [types.ts](#typests)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)



## Files Description

### api.test.ts

This file contains tests for the API functionalities.

- **Purpose**: Smoke test of the API platform
- **Key Functions/Tests**: Gets pet ,Posts new pet

### calendar.test.ts

This file contains tests for calendar-related functionalities.

- **Purpose**: E2E tests the calendar component
- **Key Functions/Tests**: Basic verifications on the functionality of the calendar component which includes:
going to infinite scroll, navigating to month view and from there creating events , verifying the creation , moving one month further checking there is no events in further month
going to initial month checking the initial events created.

### apiClient.ts

This file contains the implementation of the API client used to communicate with the backend services.

- **Purpose**: Holding all the CRUD functions for the API calls.
- **Key Functions/Classes**: Auth fucntion, Get, Delete, Post, Put


### driverHelper.ts

This file provides helper functions for initializing and managing the Selenium WebDriver.

- **Purpose**: Holds all the functionality of the slenium driver, and its options
- **Key Functions/Classes**:
  - `getDriverInstance`: Initializes and returns a new instance of WebDriver.

### pageHelper.ts

This file contains helper functions for interacting with web page elements using Selenium.

- **Purpose**: [Describe the purpose of the file]
- **Key Functions/Classes**: [List key functions or classes present in this file]
  - `clickXpath`: Clicks an element located by XPath.
  - `clickSelector`: Clicks an element located by CSS selector.
  - `waitForXpath`: Waits for an element located by XPath to be present.
  - `waitForSelector`: Waits for an element located by CSS selector to be present.
  - `isXpathExists`: Checks if an element located by XPath exists.
  - `isSelectorExists`: Checks if an element located by CSS selector exists.
  - `getTextsFromElementsBySelector`: Gets text array from elements by given selector.
  - `verifyEventCount`: Compares given count of events with actual.
  - `pickDateByResource`: Selects date by given resource ( row name).

### types.ts

This file defines TypeScript types and interfaces used throughout the project.

- **Purpose**: Holds all the types used in the API call.
- **Key Types/Interfaces**: Category,Tag , Pet

## Installation

Instructions on how to install and set up the project.

# Run tests
Go to file press F5 to debug , and select current file.
