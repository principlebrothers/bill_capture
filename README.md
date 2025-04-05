# BILL CAPTURE - WEB APP

## Description

  The goal of this project is to capture check images from a webpage using computer webcam or phone camera and link this to a variety of invoices.

## Live Demo

  [Coming soon...](https://)

## Built With

- Inertia - React
- Ruby on Rails
- Tailwind CSS

## Screenshots

### Desktop View

![Companies.png](https://i.postimg.cc/fbHkCb1g/landing-page.png)

![Invoice.png](https://i.postimg.cc/NjkKyDDt/Invoice-page.png)

### Mobile View

<div style="display: flex; flex-wrap: wrap; gap: 10px;">

  <div>
    <img src="https://i.postimg.cc/nhC4B6sx/companies-page.jpg" alt="Companies Page" width="300">
    <p style="text-align: center;">Companies Page</p>
  </div>

  <div>
    <img src="https://i.postimg.cc/3wG2bmCb/check-capturing.jpg" alt="Check Capturing" width="300">
    <p style="text-align: center;">Check Capturing</p>
  </div>

  <div>
    <img src="https://i.postimg.cc/wjZhV0Jm/invoice-page.jpg" alt="Invoice Page" width="300">
    <p style="text-align: center;">Invoice Page</p>
  </div>

</div>

## Prerequisites

### Backend

- Ruby 3.3.4
- Rails 8.0.2
- MySQL
- PostgreSQL

#### Repository

  ```sh
  https://github.com/principlebrothers/bill_capture
  ```

## Getting Started

  To get a local copy up and running follow the steps:

- Clone the project unto your local machine

SSH

  ```sh
  git clone git@github.com:principlebrothers/bill_capture.git
  ```

  HTTPS

  ```sh
  git clone https://github.com/principlebrothers/bill_capture.git
  ```

- Go to the project directory

  ```sh
  cd bill_capture
  ```

- Install dependencies

  ```sh
  bundle install
  ```

- Create database
  Set your the database password in your *bashrc/zshrc* and call it like you `config/database.yml` as you can see or just replace the password with your database password

  ```sh
  rails db:create
  ```

- Migration

  ```sh
  rails db:migrate
  ```

- Populate database
  There are fake data for you to start with in the `seed.rb` file

  ```sh
    rails db:seed
  ```

- Start the application

  ```sh
  bin/dev
  ```

- Open your browser and go to `http://localhost:3100/`

## 👥 Authors

👤 **Ernest Anyewe Adonu**

- Website: [Ernest Anyewe Adonu](https://eaadonu.vercel.app/)
- LinkedIn: [Ernest Anyewe Adonu](https://www.linkedin.com/in/ernest-anyewe-adonu/)

## 🤝 Contributing

Issues are welcome!

Feel free to check the [issues page](https://github.com/principlebrothers/bill_capture/issues/new).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

[Coming Soon](https://)
