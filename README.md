# Dkaudalia - v0.0.0

## 🧾 Project description

...

The project is divided into three completely independent applications:

- **Backend:** An API responsible for business logic and communication with the database.
- **Database:** An independent library that encapsulates data models and database access services.
- **Frontend:** A web application responsible for user interaction.

Each of these projects has its own documentation and can evolve independently.

## 📑 Context

...

## 🛠️ Key features

...

## 🚀 Getting started

1. Clone this repository:
    - (ssh):
        ```sh
        git clone git@github.com:Rizquez/dkaudalia.git
        ```

    - (http):
        ```sh
        git clone https://github.com/Rizquez/dkaudalia.git
        ```

2. Access the project directory:
    ```sh
    cd dkaudalia
    ```

3. Activate workspace: 

    This repository requires the `dkaudalia.code-workspace` file to be present in the root of the directory. The file must contain at least the following:

    ```json
    {
        "folders": [
            {
                "name": ".github",
                "path": ".github"
            },
            {
                "name": "backend",
                "path": "backend"
            },
            {
                "name": "database",
                "path": "database"
            },
            {
                "name": "frontend",
                "path": "frontend"
            }
        ]
    }
    ```

    This tells the workspace which folders should be included in it.

## 📂 Project structure

```
├── .github
│   ├── workflows
│   │   ├── database-migration.yml
│   │   ├── format-check.yml
│   │   └── main-source-check.yml
│   └── CODEOWNERS
├── backend/...
├── database/...
├── frontend/...
├── .gitignore
├── LICENSE
└── README.md
```

## 📚 Documentation

Each project has its own documentation, which explains its installation, configuration, and operation:

- [Backend (README)](./backend/README.md)
- [Database (README)](./database/README.md)
- [Frontend (README)](./frontend/README.md)

## 🔒 License

Pondus Gateway is distributed under the GNU General Public License (GPL), in accordance with the terms of the `LICENSE` file.
