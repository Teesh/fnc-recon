<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h2 align="center">FNC Recon Database and API</h2>

  <p align="center">
    The FNC Recon App will consist of three portions: collection, storage, and analysis. This project specifically targets the storage portion through building an API for collection tools to interact with and a SQL storage solution. The API will also allow analytics platforms to retrieve bulk and aggregate data. This is also a proof of concept and the final product will be owned by one of the participating FIRST teams. Find them on the FNC Scouting discord server.
    <br />
    <a href="https://github.com/Teesh/fnc-recon"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://fnc-recon-api-avxirbvnfa-ue.a.run.app/">View Demo</a>
    ·
    <a href="https://github.com/Teesh/fnc-recon/issues">Report Bug</a>
    ·
    <a href="https://github.com/Teesh/fnc-recon/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Google Cloud Platform][GCP]][GCP-url]
* [![MySQL][MySQL]][MySQL-url]
* [![Node JS][Node.js]][Node-url]
* [![Express JS][Express]][Express-url]
* [![Docker][Docker]][Docker-url]
* [![Typescript][Typescript]][Typescript-url]
* [![NPM][NPM]][NPM-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The live version on GCP is currently managed by Teesh. The live database does not allow any connections from non-production traffic. A local copy may be set up to test API changes and database changes. The MySQL database included as part of the Docker image has emphemeral data but can easily be amended to allow persistent data.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Node JS

  https://nodejs.org/en/download

* npm
  ```sh
  npm install npm@latest -g
  ```
* Docker Desktop (for local database testing only). Be aware, Windows machines may need additional setup not covered here

  https://www.docker.com/products/docker-desktop/

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Teesh/fnc-recon.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a local `.env` file in the top directory with the following
   ```env
   PORT=8080
   ENVIRONMENT=local
   ```
4. (Optional) Start the MySQL server in Docker. Make sure Docker is running first. 
   ```sh
   docker-compose up -d
   ```
5. Start the API server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To test the API, I suggest using a tool like [Postman](https://www.postman.com/) or, if you already use VS Code, the [Thunder Client](https://www.thunderclient.com/) extension

_For more examples, please refer to the [Documentation (Placeholder)](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Agree on a DB schema for scoring data collection for 2023 Charged Up
- [ ] Expand API options for data collection
- [ ] Build a data collection tool (e.g. Tiger Scout)
- [ ] Build analytics API
- [ ] Build an analytics website
- [ ] Build an API repository for broader use

See the [open issues](https://github.com/Teesh/fnc-recon/issues) for a full list of proposed features (and known issues). Feel free to add or track issues there for now. They can be migrated to the official repo later once that is built.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. As a proof of concept, the work here will eventually be migrated to an official team repository.

Until then, if you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Teesh - Find me on the FNC Scouting Discord as `Teesh|4561|Mentor` or reach out to me via email at `teesh.s93@gmail.com` 

Project Link: [https://github.com/Teesh/fnc-recon](https://github.com/Teesh/fnc-recon)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Terrorbytes](terrorbytes.org) for their support and vision in this

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Teesh/fnc-recon.svg?style=for-the-badge
[contributors-url]: https://github.com/Teesh/fnc-recon/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Teesh/fnc-recon.svg?style=for-the-badge
[forks-url]: https://github.com/Teesh/fnc-recon/network/members
[stars-shield]: https://img.shields.io/github/stars/Teesh/fnc-recon.svg?style=for-the-badge
[stars-url]: https://github.com/Teesh/fnc-recon/stargazers
[issues-shield]: https://img.shields.io/github/issues/Teesh/fnc-recon.svg?style=for-the-badge
[issues-url]: https://github.com/Teesh/fnc-recon/issues
[license-shield]: https://img.shields.io/github/license/Teesh/fnc-recon.svg?style=for-the-badge
[license-url]: https://github.com/Teesh/fnc-recon/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/teeshshahi
[product-screenshot]: images/screenshot.png
[GCP]: https://img.shields.io/badge/Google_Cloud-0F9D58?style=for-the-badge&logo=google-cloud&logoColor=F4B400
[GCP-url]: https://cloud.google.com/
[MySQL]: https://img.shields.io/badge/MySQL-20232A?style=for-the-badge&logo=mysql&logoColor=61DAFB
[MySQL-url]: https://mysql.org/
[Node.js]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodedotjs&logoColor=4FC08D
[Node-url]: https://nodejs.org/
[Express]: https://img.shields.io/badge/Express-DD0031?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Docker]: https://img.shields.io/badge/Docker-4A4A55?style=for-the-badge&logo=docker&logoColor=4285F4
[Docker-url]: https://docker.com/
[Typescript]: https://img.shields.io/badge/Typescript-4285F4?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://typescriptlang.org
[NPM]: https://img.shields.io/badge/NPM-CC3534?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://npmjs.com