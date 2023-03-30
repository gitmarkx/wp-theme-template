# Wordpress Theme Template

Custom Wordpress Theme Template using SCSS and Wordpress Files. It has been built with clean and modern code, optimized for better developer experience.

##### Table of Contents

- [:pushpin: Prerequisites](#Prerequisites)
- [:rocket: Installing Wordpress Template](#Installing)
- [:computer: Usage of Wordpress Template](#Usage)
- [:computer: Using Wordpress Pagination for editing output](#Usage)
- [:memo: Contributing to Wordpress Template](#Contributing)
- [:paperclip: Additional Info](#Additional)

- [:two_hearts: Acknowledgements and References](#Acknowledgements)
- [:mailbox: Credits](#Credits)
- [:handshake: Contribute](#Contribute)

## <a name='Prerequisites'></a> :pushpin: Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a `Windows 10` machine.

| Tool | Version | Description                                                                           |
| ---- | ------- | ------------------------------------------------------------------------------------- |
| NVM  | > 1.1   | Node version manager for fast switching node version                                  |
| Node | >= 8.15 | Install Node via [NVM](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7) |

## <a name='Installing'></a> :rocket: Installing Wordpress Template

To install Wordpress Template in your local machine, run this following script in your terminal:

**Windows**:

```sh
git clone -b <your_branch> https://github.com/gitmarkx/wp-theme-template.git
```

## <a name='Usage'></a>:computer: Usage of Wordpress Template

To begin the development, follow this steps listed below:

1. cd src
2. run **`npm install`**
3. after the dependencies installed, run **`gulp watch`**

:warning: Wordpress Theme Template does not use the standard format of [Static template](https://github.com/HiPE-Inc-ltd/static_template)

## <a name='Usage'></a>:computer: Using Wordpress Pagination for editing output

To begin using wordpress pagination, follow this steps listed below:

1. Install and Activate Easy WP Page Navigation (https://wordpress.org/plugins/easy-wp-page-navigation/)
2. Go to wordpress root directory, wp-content/plugins/easy-wp-page-navigation/inc/
3. Edit functions.php and add the lines of code on array

```sh
'mid_size' => 1, => default is 2
'end_size' => 1, => default is 1
```

4. Save the edited code
5. You can also customize pagination design based on client requirements

##### Code Block:

**Windows**:

```sh
cd src
npm install
gulp watch
```

## <a name='Contributing'></a> :memo: Contributing to Wordpress Template

Before cloning, create a [new branch](https://github.com/gitmarkx/wp-theme-template.git) for your local development.

To contribute to Wordpress Template, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## <a name='Credits'></a> :mailbox: Credits

- [Mark Ariel Maata](https://github.com/bpoc-mark)📖👩‍💻
- [Greg Amer V. Arsua](https://github.com/arsua-greg)📖👩‍💻

Copyright © 2023 [HiPE Inc. ltd.](https://bpoc.co.jp/) All rights reserved
