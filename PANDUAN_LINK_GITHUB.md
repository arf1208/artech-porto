# PANDUAN PENTING: Cara Aktifkan Link Website di GitHub

Jika Anda mendapatkan error **"Insufficient permissions"** saat export, ikuti langkah ini di website GitHub Anda:

1.  **Izin Workflow (WAJIB)**:
    - Buka repositori Anda di GitHub.
    - Masuk ke **Settings** -> **Actions** -> **General**.
    - Centang **"Read and write permissions"** di bagian paling bawah.
    - Klik **Save**.

2.  **Aktifkan Website**:
    - Masuk ke **Settings** -> **Pages**.
    - Di bagian **Source**, ubah dari "Deploy from a branch" menjadi **"GitHub Actions"**.

3.  **Tunggu Proses Selesai**:
    - Buka tab **Actions** di atas.
    - Tunggu sampai ada centang hijau.
    - Website Anda akan aktif di: `https://arf1208.github.io/artech-porto/`

**Kenapa sebelumnya putih/blank?**
Karena folder GitHub Anda berisi kode mentah (React), bukan file yang sudah siap dijalankan browser. File `.github/workflows/deploy.yml` yang saya buat di atas bertugas mengubah kode tersebut menjadi file HTML otomatis tanpa Anda harus beli domain.
