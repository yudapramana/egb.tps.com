<template>
    <div class="content-header">
        <div class="container">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-5">
                    <h1 class="m-0"> Silahkan isi <strong>Buku Tamu</strong></h1>
                </div>
                <div class="col-sm-5">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Buku Tamu</a></li>
                        <li class="breadcrumb-item"><a href="#">Formulir</a></li>
                        <li class="breadcrumb-item active">Isi Formulir</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container">
            <div class="row justify-content-md-center">

                <div class="col-lg-10">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Formulir Buku Tamu</h4>
                        </div>
                        <form @submit.prevent="saveData()">

                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Nama Lengkap</label>
                                            <input type="text" class="form-control" placeholder="Nama Lengkap"
                                                v-model="form.name" id="name" name="name" :class="{
                                                    'is-invalid':
                                                        form.errors.has('name'),
                                                }">
                                            <has-error :form="form" field="name"></has-error>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">

                                        <div class="form-group">
                                            <label>Jenis Kelamin</label>
                                            <select class="form-control" id="gender" name="gender" v-model="form.gender"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has('gender'),
                                                }">
                                                <option value="">Pilih Jenis Kelamin</option>
                                                <option value="L">Laki-laki</option>
                                                <option value="P">Perempuan</option>
                                            </select>
                                            <has-error :form="form" field="gender"></has-error>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Nomor HP</label>
                                            <input type="text" class="form-control" placeholder="Nomor HP / Telepon"
                                                v-model="form.no_hp" id="no_hp" name="no_hp" :class="{
                                                    'is-invalid':
                                                        form.errors.has('no_hp'),
                                                }">
                                            <has-error :form="form" field="no_hp"></has-error>
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="Email"
                                                v-model="form.email" id="email" name="email" :class="{
                                                    'is-invalid':
                                                        form.errors.has('email'),
                                                }">
                                            <has-error :form="form" field="email"></has-error>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Alamat</label>
                                            <textarea class="form-control" rows="3" placeholder="Alamat"
                                                v-model="form.address" id="address" name="address" :class="{
                                                    'is-invalid':
                                                        form.errors.has('address'),
                                                }"></textarea>
                                            <has-error :form="form" field="address"></has-error>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Asal Instansi / Satuan Kerja</label>
                                            <input type="text" class="form-control" placeholder="Asal Instansi"
                                                v-model="form.organisasi" id="organisasi" name="organisasi" :class="{
                                                    'is-invalid':
                                                        form.errors.has('organisasi'),
                                                }">
                                            <has-error :form="form" field="organisasi"></has-error>

                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>Jabatan</label>
                                            <input type="text" class="form-control" placeholder="Jabatan"
                                                v-model="form.jabatan" id="jabatan" name="jabatan" :class="{
                                                    'is-invalid':
                                                        form.errors.has('jabatan'),
                                                }">
                                            <has-error :form="form" field="jabatan"></has-error>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Keperluan</label>
                                            <input type="text" class="form-control" placeholder="Keperluan"
                                                v-model="form.keperluan" id="keperluan" name="keperluan" :class="{
                                                    'is-invalid':
                                                        form.errors.has('keperluan'),
                                                }">
                                            <has-error :form="form" field="keperluan"></has-error>

                                        </div>
                                    </div>

                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label>Tujuan</label>
                                            <select class="form-control" v-model="form.tujuan" id="tujuan" name="tujuan"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has('tujuan'),
                                                }">
                                                <option value="">Pilih Tujuan</option>
                                                <option value="Kepala Kantor">Kepala</option>
                                                <option value="Kasubbag TU">Kasubbag TU</option>
                                                <option value="Seksi PHU">Seksi PHU</option>
                                                <option value="Seksi BIMAS">Seksi BIMAS</option>
                                                <option value="Seksi PDPONTREN">Seksi PDPONTREN</option>
                                                <option value="Seksi PAIS">Seksi PAIS</option>
                                                <option value="Seksi PENMAD">Seksi PENMAD</option>
                                                <option value="Seksi PENYELENGGARA SYARIAH">Seksi PENYELENGGARA SYARIAH
                                                </option>
                                            </select>
                                            <has-error :form="form" field="tujuan"></has-error>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary float-end" :disabled="disabled">
                                    <i v-show="loading" class="fa fa-spinner fa-spin"></i>
                                    Simpan Data
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
  
<script>
import GuestService from '../services/guest.service';
import Form from 'vform';
import Swal from 'sweetalert2';
import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

export default {
    name: "Landing",
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    components: {
        'has-error': HasError,
        'alert-error': AlertError
    },
    data() {
        return {
            loading: false,
            disabled: false,
            editModal: false,
            form: new Form({
                id: "",
                name: "",
                gender: "",
                no_hp: "",
                email: "",
                address: "",
                organisasi: "",
                jabatan: "",
                keperluan: "",
                tujuan: "",
            }),
        };
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        saveData() {
            this.$Progress.start();
            this.loading = true;
            this.disabled = true;

            console.log('this.form');
            console.log(this.form);

            console.log('this.form.name');
            console.log(this.form.name);



            GuestService.store(this.form).then(
                (response) => {
                    console.log('response');
                    console.log(response);
                    let data = response.data;

                    if (data.code == 200) {

                        Toast.fire({
                            icon: "success",
                            title: "Data saved successfully",
                        });

                        let timerInterval
                        Swal.fire({
                            title: 'Berhasil!',
                            icon: 'success',
                            text: 'Data Anda berhasil tersimpan!',
                            html: 'Data Anda berhasil tersimpan! <br> Modal akan ditutup dalam waktu <b></b> milliseconds.',
                            timer: 2000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                const b = Swal.getHtmlContainer().querySelector('b')
                                timerInterval = setInterval(() => {
                                    b.textContent = Swal.getTimerLeft()
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                            /* Read more about handling dismissals below */
                            if (result.dismiss === Swal.DismissReason.timer) {
                                console.log('I was closed by the timer');
                                this.$router.push('/thanks');
                            }
                        })

                        this.loading = false;
                        this.disabled = false;
                        this.$Progress.finish();
                    } else {
                        Swal.fire(
                            "Failed",
                            data.message,
                            "warning"
                        );
                    }
                },
                (error) => {
                    console.log('error local');
                    console.log(error);
                    console.log('error local message');
                    console.log(error.message);
                    this.loading = false;
                    this.disabled = false;
                    this.$Progress.fail();
                    // Swal.fire(
                    //     "Failed",
                    //     'Mohon untuk mengisi kolom yang kosong',
                    //     "warning"
                    // );

                    Swal.fire(
                        "Failed",
                        error.message,
                        "warning"
                    );
                }
            );
        },
    },
    created() {
        this.$Progress.start();
    },
    mounted() {
        this.$Progress.finish();
    },
};
</script>
  
<style scoped>
.content-wrapper {
    margin-left: 0 !important;
}

.main-footer {
    margin-left: 0 !important;
}

.main-header {
    margin-left: 0 !important;
}

.main-header {
    --bs-navbar-padding-x: 1rem !important;
}
</style>