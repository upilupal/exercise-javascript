

//         - showCatalog : menampilkan isi catalog dari toko

//         - showCart : menampilkan isi cart user



// buat parent class Product
//     constructor = nama, berat, price,stok
class Product {
  constructor(nama, berat, price, stok) {
    this.nama = nama, 
    this.berat = berat,
    this.price = price,
    this.stok = stok;
    
}

}

//     buat child class dari produk yaitu Buku dan Pakaian
//     constructor = super, data unik dari buku dan pakaian
class Buku extends Product {
  constructor(nama, berat, price, stok, penulis, penerbit) {
    super(nama, berat, price, stok);
    this.penulis = penulis;
    this.penerbit = penerbit;
}

}
class Pakaian extends Product {
  constructor(nama, berat, price, stok, ukuran, warna) {
    super(nama, berat, price, stok);
    this.ukuran = ukuran;
    this.warna = warna;
  }
}

//     buat class OnlineShop
//     constructor = products dan cart (private)

class OnlineShop {
  #products;
  #cart;
  constructor() {
    this.#products = [];
    this.#cart = [];
  }

  #checkProduk(nama) {
    return this.#products.find((item) => item.nama === nama);
  }

  // showCatalog : menampilkan isi catalog dari toko
  showCatalog() {
    return {
      catalog: this.#products,
      totalCatalog: this.#products.length,
    }
  }

  //  showCart : menampilkan isi cart
  showCart() {
    return {
      catalog: this.#cart,
      totalCatalog: this.#cart.length,
    }
  }

  // tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products return produk  sudah ada dalam toko

  tambahProduk(produk) {
    const existingProduct = this.#checkProduk(produk.nama);

    if (existingProduct) {
      return "Produk sudah ada dalam toko";
    }

    this.#products.push(produk);
    return "produk berhasil ditambahkan";
    
}

  // tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

  tambahKeKeranjang(produk, jumlah) {
    // Validasi apakah produk ada di dalam catalog
    const availableProduk = this.#checkProduk(produk.nama);
        // validasi produk sudah ada di cart atau belum
    if(!availableProduk) {
      return "Produk tidak tersedia di toko ini";
    }

    let cartItem = this.#cart.find((item) => item.produk.nama.toLowerCase() === produk.nama.toLowerCase());

    if(cartItem) {
      // jika produk sudah ada dikeranjang, tambahkan jumlahnya
      if(availableProduk.stok >= jumlah) {
        cartItem.jumlah += jumlah;
        availableProduk.stok -= jumlah;

        return "Berhasil ditambahkan ke keranjang";
      } else {
        return "Stok tidak mencukupi";
      }
    } else {
      // jika produk blm ada dikeranjang, tambahkan produk baru
      if(availableProduk.stok >= jumlah) {
        this.#cart.push({produk: availableProduk, jumlah: jumlah});
        availableProduk.stok -= jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return "stok tidak mencukupi";
      }
    }
  }

  // transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi untuk uangUser tidak boleh kurang dari total pembayaran.
  transaksi(userMoney, jarak) {
    let totalBelanja = 0;

    this.#cart.forEach((item) => {
      totalBelanja += item.produk.price * item.jumlah;
    });

    const ongkir = jarak * 2000
    const totalHarga = totalBelanja + ongkir;

    if (!jarak) {
      return "jarak harus diisi";
    }

    if (!userMoney || userMoney < totalHarga) {
      return "duit kurang coy";
    }

    this.#cart = []

    return {
      message: "transaksi berhasil",
      totalBelanja: totalBelanja.toLocaleString("id-ID"),
      onkir: ongkir.toLocaleString("id-ID"),
      totalHarga: totalHarga.toLocaleString("id-ID"),
      kembalian: (userMoney - totalHarga).toLocaleString("id-ID"), 
    };
  }
 


}




const produk1 = new Buku ("jago ngoding", 1, 100000, 5, "naufal", "megalodon");
const produk2 = new Pakaian ("kaos punk", 3, 120000, 10, "XL", "merah");

const tokoOnline = new OnlineShop();

console.log(tokoOnline.tambahProduk(produk1));
console.log(tokoOnline.tambahProduk(produk2));

console.log(tokoOnline.tambahKeKeranjang(produk1, 2));
console.log(tokoOnline.tambahKeKeranjang(produk2, 3));

console.log(tokoOnline.showCatalog());
console.log(tokoOnline.showCart());

console.log(tokoOnline.transaksi(600000, 2));
