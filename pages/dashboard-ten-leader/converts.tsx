import React from 'react'
import { ManagementLayout } from '../../layouts'
import Table, { Irow } from 'react-tailwind-table'

const col = [
    {
        field: "front_end_position.name.full_name",
        use: "Position",
        //Will not be used in search filtering
        //  use_in_search:false
    },
    {
        field: "name",
        use: "Player Name",
    },
    {
        field: "country_id",
        use: "Country",

        //Will not be displayed in the table
        use_in_display: false
    },
    {
        field: "club_id",
        use: "Club Details",
    },
    {
        field: "action",
        use: "Action",

    }
]

const row = [
    {
        id: 1,
        name: "Miracle Nwabueze",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil an VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Xherdan Shaqiri",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Gini WjNadumn",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Oluebube Odogwu",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    },
    {
        id: 1,
        name: "Minamino Sale",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Thiago Silva",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Mid Fielder",
                short_code: "MF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Xherdan Shaqiri",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Gini WjNadumn",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    },
    {
        id: 1,
        name: "Minamino Sale",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Thiago Silva",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Mid Fielder",
                short_code: "MF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Xherdan Shaqiri",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Gini WjNadumn",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    }, {
        id: 1,
        name: "Sadio Mane",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Virgil VanDijk",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Defence",
                short_code: "DF"
            },
            id: 2
        }
    },
    {
        id: 1,
        name: "Minamino Sale",
        country_id: 3,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Forward",
                short_code: "FW"
            },
            id: 2
        }
    },
    {
        id: 3,
        name: "Thiago Silva",
        country_id: 30,
        club_id: 2,
        front_end_position: {
            name: {
                full_name: "Mid Fielder",
                short_code: "MF"
            },
            id: 2
        }
    }
];
const Converts = () => {
    return (
        <ManagementLayout type='leader'>
            <div>
                <div className='flex items-center justify-between mb-4 bg-primary text-slate-200 rounded-xl py-3 px-6'>

                    <div className='mr-auto'>
                        <h3 className='sm:text-2xl text-lg'> ALL CONVERTS </h3>
                        <p className='text-gray-400 sm:text-lg text-sm' >all converts add by users in your TEN</p>
                    </div>
                    <img src="/images/general/leader.png" className='w-16 ' alt="" />
                </div>
                <Table columns={col} rows={row}
                    per_page={5}
                    //  table_header="My Table Is Good"
                    bulk_select_options={["Save", "Delete", "Update"]}
                    // export_csv_file = "FuckThisShit"
                    // on_bulk_action={tableBulkClick}
                    should_export={true}
                    // on_search={onSearch}
                    show_search={true}
                    // export_modify={exportModify}
                    striped={true}
                    bordered={true}
                    hovered={true}
                // styling={tableStyling}
                // row_render={rowcheck}
                // bulk_select_button_text="Apply"
                ></Table>
            </div>
        </ManagementLayout>
    )
}

export default Converts