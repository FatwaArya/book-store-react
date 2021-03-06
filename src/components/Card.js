import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2 dark:text-slate-600" key={this.props.key}>
                <div className="card">
                    <div className="card-body row ">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-5">
                            <img src={this.props.cover} alt="img" className="img"
                                height="200" />
                        </div>

                        {/* menampilkan deskripsi */}
                        <div className="col-7 dark:bg-gray-800 dark:text-gray-200">
                            <h5 className="text-info">
                                {this.props.judul}
                            </h5>
                            <h6 className="">
                                Penulis: {this.props.penulis}
                            </h6>
                            <h6 className="">
                                Penerbit: {this.props.penerbit}
                            </h6>
                            <h6 className="text-danger">
                                Harga: Rp {this.props.harga}
                            </h6>

                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1"
                                onClick={this.props.onEdit} data-toggle="modal" data-target="#modal">
                                Edit
                            </button>

                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1"
                                onClick={this.props.onDrop}>
                                Hapus
                            </button>

                            {/* button untuk menambah ke keranjang belanja */}
                            <button className="btn btn-sm btn-success m-1"
                                onClick={this.props.onCart}>
                                Tambahkan ke keranjang belanja
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Card;