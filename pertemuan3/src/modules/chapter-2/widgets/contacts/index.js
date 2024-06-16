import React, { useMemo, useState } from "react";
import { AccountLong } from "../components/AccountUI";
import { Link } from "react-router-dom";
import { ButtonIcon, ButtonSearch } from "../components/ButtonUI";

export function ContactUI({ my_account, friends, selectedUser, HandlerSelectedChat }) {
    const my_friends = friends;
    const [search, setSearch] = useState([]);
    const [sorting, setSorting] = useState({ field: "", order: "" });



    const ResultData = useMemo(() => {
        let computedData = my_friends;

        // menambahkan logika algoritma untuk melakukan pencarian data
        if (search) {
            computedData = computedData.filter(
                listData => {
                    return Object.keys(listData).some(key =>
                        listData[key].toString().toLowerCase().includes(search)
                    );
                }
            );
        }

        // menambahkan logika penggunaan localeCompare() untuk mengurutkan nilai array
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedData = computedData.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        return computedData;
    }, [my_friends, search, sorting])

    // membuat function onAction bernama toggleSorting(‘name’)
    const toggleSorting = (field) => {
        if (sorting.field === field) {
            setSorting({
                ...sorting,
                order: sorting.order === 'asc' ?
                    'desc' : 'asc'
            });
        } else {
            setSorting({
                field: field,
                order: 'asc'
            });
        }
    };


    return (
        <div className="card card-flush h-100 mb-5 mb-xl-10 rounded-0
rounded-start-1">
            <div className="card-header">
                <div className="card-title">
                    <AccountLong data={my_account} color={"danger"} />
                </div>
                <div className="card-toolbar">
                    <Link to={"/sign-out"} className="btn btn-icon btn-sm"
                        title="Sign out" >
                        <i className="bi bi-box-arrow-right text-danger fw-bold fs2x"></i>
                    </Link>
                </div>
            </div>
            <div className="card-body d-flex flex-column justify-contentbetween p-0">
                <div className="my-contact border-top">
                    <div className="filters p-5 border-bottom d-flex align-itemscenter">
                        <ButtonSearch setSearch={setSearch}>
                            <span className="svg-icon svg-icon-1 svg-icon-gray-400 me1">
                                <i class="bi bi-search"></i>
                            </span>
                        </ButtonSearch>

                        {/* Setelah menambahkan logika sorting pada useMemo kita perlu menambahkan action pada 
                        tombol filter di JSX */}
                        <ButtonIcon
                            title={`Sorting ${sorting.order}`}
                            onAction={() => toggleSorting('name')}>
                            <i className={"bi fw-bold fs-2x bi-filter"}></i>
                        </ButtonIcon>
                    </div>

                    {/* merender variable ResultData dengan menggunakan MAP */}
                    <div className="friends"> 
                        <p className="text-center">list kontak dimari</p>
                        {Object.values(ResultData).length > 0 ? (
                            ResultData.map((v, index) => (
                                <div className={"friend-item "} key={index}
                                    onClick={() => HandlerSelectedChat(v)}> {/* Passing parameter chat terpilih */}
                                    <AccountLong data={v} color={"info"} />
                                </div>
                            ))
                        ) : "No Data Found!"}

                    </div>
                </div>
                <p className="fs-8 text-center mb-0 py-3">
                    <i className="bi bi-lock-fill"></i>
                    <span className="ms-1">Your personal messages are <span
                        className="text-info">end-to-end encrypted</span></span>
                </p>
            </div>
        </div>
    );
}