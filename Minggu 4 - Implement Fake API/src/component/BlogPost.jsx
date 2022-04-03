import React, { Component } from "react";


class BlogPost extends Component{
    refresh = ()=>{
        // 
        this.handleTombolSimpan();
        window.location.reload();
        // alert('Berhasil Menyimpan Data');
    }
   
    state = {
        listMahasiswa: [],
        insertmahasiswa: {
            userId: 1,
            id: 1,
            nama: "",
            kelas: "",
            status:"",
            pts: "",
        },
    };
    // kita mmebuat sebuah  fungsi untuk get data dengan menggunakan fecth
    ambilDataDariServerAPI = () => {
        fetch("http://localhost:3001/posts?_sort=id&_order=desc")
            .then((response) => response.json())//untuk mengecek data response nya 
            .then((jsonHasilAmbilDariAPI) => {
                this.setState({ //menerima data dan menampung nya di state
                    listMahasiswa: jsonHasilAmbilDariAPI,
                });
            });
    };
    // ini merupakan fugsi life circle sebuah component
    componentDidMount() { 
        this.ambilDataDariServerAPI();
    }
    handleHapusmahasiswa = (nim) => {
        fetch("http://localhost:3001/posts/" + nim, { method: "DELETE" }).then(
            (res) => {
                this.ambilDataDariServerAPI();
                // alert('Berhasil Menghapus Data');
            }
        );
    };
    handleTambahmahasiswa = (event) => {
        let formInsertmahasiswa = { ...this.state.insertmahasiswa};
        let timestamp = new Date().getTime();
        formInsertmahasiswa['id'] = timestamp;
        formInsertmahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertmahasiswa: formInsertmahasiswa
        });
    };
    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertmahasiswa)
        })
            .then((response) => {
                this.ambilDataDariServerAPI();
                
            }
        );
    }
    render(){
        return(
            <div class="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">
                            Nama
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="nama"
                                name="nama"
                                onChange={this.handleTambahmahasiswa}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">
                            kelas
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="kelas"
                                name="kelas"
                                onChange={this.handleTambahmahasiswa}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">
                            Points
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="pts"
                                name="pts"
                                onChange={this.handleTambahmahasiswa}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">
                            Status
                        </label>
                        <div className="col-sm-10" >
                            <select id="status" name="status" onChange={this.handleTambahmahasiswa}>
                                <option>--</option>
                                <option>Aktif</option>
                                <option>Tidak Aktif</option>
                                <option>Lulus</option>
                            </select>
                        </div>
                    </div>
                    
                    
                    
                    <div></div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.refresh}
                    >
                        Simpan
                    </button>
                </div>
                        <div className="container mb-3 mt-3">
                        <table className="table table-striped table-bordered mydatatable">
                        <thead>
                            <tr>
                                <th>Nomor</th>
                                <th>Nama</th>
                                <th>Kelas</th>
                                <th>Status</th>
                                <th>Point</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                 {this.state.listMahasiswa.map((mahasiswa) => {
                     
                    return (
                        
                        <tbody>
                            <tr>
                                <td>{mahasiswa.userId}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.kelas}</td>
                                <td>{mahasiswa.status}</td>
                                <td>{mahasiswa.pts}</td>
                                <td><button className="btn btn-sm btn-warning" onClick={() => this.handleHapusmahasiswa(mahasiswa.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                        
                        
                    );
                })}
                
                </table>
              </div> 
            </div>
        )
    }
}
export default BlogPost;