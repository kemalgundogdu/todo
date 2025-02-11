# EN - CatDo - To Do App

![Project Screenshot](./screenshot.png)

This project is a simple To Do application that helps you manage your tasks.

## Features

- Add tasks
- Complete tasks
- Delete tasks
- Update task status

## Setup

### Server

1. Navigate to the project directory:
    ```bash
    cd /Users/***/Desktop/todoApp/server
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Configure the database connection (edit the config/db.js file).

4. Start the server:
    ```bash
    npm start
    ```

### Client

1. Navigate to the project directory:
    ```bash
    cd /Users/***/Desktop/todoApp/client
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the client application:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Add, complete, and manage your tasks.

## API

### GET /tasks

Fetches all tasks.

### POST /tasks/add

Adds a new task.

### DELETE /tasks/delete/:id

Deletes the task with the specified ID.

### PUT /tasks/completed/:id

Updates the completion status of the task with the specified ID.

## Contributing

If you would like to contribute, please submit a pull request.

## License

This project is licensed under the MIT License.

---

# TR - CatDo - To Do Uygulaması

Bu proje, görevlerinizi yönetmenize yardımcı olan basit bir To Do uygulamasıdır.

## Özellikler

- Görev ekleme
- Görev tamamlama
- Görev silme
- Görevlerin durumunu güncelleme

## Kurulum

### Sunucu

1. Proje dizinine gidin:
    ```bash
    cd /Users/***/Desktop/todoApp/server
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. Veritabanı bağlantısını yapılandırın (config/db.js dosyasını düzenleyin).

4. Sunucuyu başlatın:
    ```bash
    npm start
    ```

### İstemci

1. Proje dizinine gidin:
    ```bash
    cd /Users/***/Desktop/todoApp/client
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. İstemci uygulamasını başlatın:
    ```bash
    npm start
    ```

## Kullanım

1. Tarayıcınızı açın ve `http://localhost:3000` adresine gidin.
2. Görevlerinizi ekleyin, tamamlayın ve yönetin.

## API

### GET /tasks

Tüm görevleri getirir.

### POST /tasks/add

Yeni bir görev ekler.

### DELETE /tasks/delete/:id

Belirtilen ID'ye sahip görevi siler.

### PUT /tasks/completed/:id

Belirtilen ID'ye sahip görevin tamamlanma durumunu günceller.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.
