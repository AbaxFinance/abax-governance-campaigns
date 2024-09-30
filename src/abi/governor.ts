import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x58872986c826b3adb099cbd66374eb28bb5545b62005b8c87edb53060f563a5a",
        "language": "ink! 5.0.0",
        "compiler": "rustc 1.77.2",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "4.1.1",
            "rust_toolchain": "stable-x86_64-unknown-linux-gnu",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "governor",
        "version": "0.1.0",
        "authors": [
            "[your_name] <[your_email]>"
        ]
    },
    "image": "paritytech/contracts-verifiable:4.1.1",
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "asset",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "vester",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "foundation",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "parameters_admin",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    },
                    {
                        "label": "unstake_period",
                        "type": {
                            "displayName": [
                                "Timestamp"
                            ],
                            "type": 48
                        }
                    },
                    {
                        "label": "name",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 37
                        }
                    },
                    {
                        "label": "symbol",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 37
                        }
                    },
                    {
                        "label": "rules",
                        "type": {
                            "displayName": [
                                "VotingRules"
                            ],
                            "type": 50
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "new",
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 127
                },
                "selector": "0x9bae9d5e"
            }
        ],
        "docs": [
            " This is Abax Governor Contract implementation.",
            " It allows for staking PSP22 token (Abax token) in exchange for PSP22Vault shares (votes).",
            " The shares are non-transferrable.",
            " Withdrawing assets is possible only after unstake period - unstaking is handled by GeneralVest contract.",
            "",
            " The contract allows for proposing and voting on proposals by implementing Govern trait.",
            " To create a proposal, the proposer must have enough votes (shares) to meet the minimum stake part.",
            " While proposal is created the proposer must deposit a part of his votes. This votes are returned when proposal is finalized unless the proposal is finalized with 'DefeatedWithSlash' status.",
            " One share is one vote.",
            " Proposal has 3 periods of voting: Intial, Flat and Final which influence the minimum votes to finalize.",
            " If proposal was finalized in Final phase, it's possible to force unstake an account that didn't vote on that proposal.",
            "",
            " Contract is using pendzl Access Control to manage access to the messages"
        ],
        "environment": {
            "accountId": {
                "displayName": [
                    "AccountId"
                ],
                "type": 9
            },
            "balance": {
                "displayName": [
                    "Balance"
                ],
                "type": 15
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 0
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 178
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 70
            },
            "maxEventTopics": 4,
            "staticBufferSize": 16384,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 48
            }
        },
        "events": [
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "proposal_hash",
                        "type": {
                            "displayName": [
                                "ProposalHash"
                            ],
                            "type": 70
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "proposal",
                        "type": {
                            "displayName": [
                                "Proposal"
                            ],
                            "type": 134
                        }
                    }
                ],
                "docs": [],
                "label": "ProposalCreated",
                "module_path": "governor::modules::govern::traits::events",
                "signature_topic": "0xcd14879a051c7c587f001e1d438c0b137fd1c2a51d830f5fdcd29cfc04a29121"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "status",
                        "type": {
                            "displayName": [
                                "ProposalStatus"
                            ],
                            "type": 82
                        }
                    }
                ],
                "docs": [],
                "label": "ProposalFinalized",
                "module_path": "governor::modules::govern::traits::events",
                "signature_topic": "0x5f5b16027cc992a83e3eedcdd887ffcbb490ffc9afb4bc3623c1e2cb54921ee4"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [],
                "label": "ProposalExecuted",
                "module_path": "governor::modules::govern::traits::events",
                "signature_topic": "0xddfe7f295d992235f6a7383cea3c5a7721049996fad19b261039a5fd67ed5189"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "vote",
                        "type": {
                            "displayName": [
                                "Vote"
                            ],
                            "type": 90
                        }
                    }
                ],
                "docs": [],
                "label": "VoteCasted",
                "module_path": "governor::modules::govern::traits::events",
                "signature_topic": "0x2ebcdce502f12523e0670f6e293cb7ad129d9aa48f5522ae3a294e822656a4d8"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "rules",
                        "type": {
                            "displayName": [
                                "VotingRules"
                            ],
                            "type": 50
                        }
                    }
                ],
                "docs": [],
                "label": "VotingRulesChanged",
                "module_path": "governor::modules::govern::traits::events",
                "signature_topic": "0x34110cc3e5aa20ebef66d61de2e100ad52e013b1c4ad6b1582ea4aa568fc945a"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "unstake_period",
                        "type": {
                            "displayName": [
                                "Timestamp"
                            ],
                            "type": 48
                        }
                    }
                ],
                "docs": [],
                "label": "UnstakePeriodChanged",
                "module_path": "governor::modules::govern::traits::events",
                "signature_topic": "0x9157abbc52e3dead04f1509d5cffd9f18b51cf6fe2838565610edde16849ce20"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "sender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "assets",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "shares",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "docs": [
                    "Represents a deposit event in the Vault contract."
                ],
                "label": "Deposit",
                "module_path": "pendzl_contracts::token::psp22::extensions::vault",
                "signature_topic": "0xa5e5b1f0631e5f5290989092ca16eea75c92d1c382b59c7c1fd4f0bb971b5731"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "sender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "receiver",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "assets",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "shares",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "docs": [
                    "Represents a withdraw event in the Vault contract."
                ],
                "label": "Withdraw",
                "module_path": "pendzl_contracts::token::psp22::extensions::vault",
                "signature_topic": "0x32d4a91f012e838e1412f7062209d065f1a86c43aeec8cb04d5e71d0da155f6e"
            },
            {
                "args": [
                    {
                        "docs": [
                            "The account that triggered the release."
                        ],
                        "indexed": true,
                        "label": "caller",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [
                            "The account to which the tokens are sent."
                        ],
                        "indexed": true,
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [
                            "The locked asset."
                        ],
                        "indexed": true,
                        "label": "asset",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    },
                    {
                        "docs": [
                            "The amount of tokens released."
                        ],
                        "indexed": false,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "docs": [
                    "Emitted when vested tokens are released"
                ],
                "label": "TokenReleased",
                "module_path": "pendzl_contracts::finance::general_vest",
                "signature_topic": "0xde8c338ca79d8805352d1d92f36574a15658653f461ebd4f627be5d542e7363b"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "creator",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [
                            "The locked asset."
                        ],
                        "indexed": true,
                        "label": "asset",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    },
                    {
                        "docs": [
                            "The account to which the tokens will be sent."
                        ],
                        "indexed": true,
                        "label": "receiver",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [
                            "The amount of tokens released."
                        ],
                        "indexed": false,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "schedule",
                        "type": {
                            "displayName": [
                                "VestingSchedule"
                            ],
                            "type": 176
                        }
                    }
                ],
                "docs": [
                    "Emitted when general_vest schedule is created"
                ],
                "label": "VestingScheduled",
                "module_path": "pendzl_contracts::finance::general_vest",
                "signature_topic": "0xc5a44e3ce50f6ecdb81b76c25cea0615b745a129563c4ad611b6067ae1e0eb32"
            },
            {
                "args": [
                    {
                        "docs": [
                            "The account from which the tokens are transferred. `None` for minting operations."
                        ],
                        "indexed": true,
                        "label": "from",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    },
                    {
                        "docs": [
                            "The account to which the tokens are transferred. `None` for burning operations."
                        ],
                        "indexed": true,
                        "label": "to",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    },
                    {
                        "docs": [
                            "The amount of tokens transferred."
                        ],
                        "indexed": false,
                        "label": "value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "docs": [
                    "Emitted when tokens are transferred, including zero value transfers."
                ],
                "label": "Transfer",
                "module_path": "pendzl_contracts::token::psp22",
                "signature_topic": "0xb5b61a3e6a21a16be4f044b517c28ac692492f73c5bfd3f60178ad98c767f4cb"
            },
            {
                "args": [
                    {
                        "docs": [
                            "The account of the token owner."
                        ],
                        "indexed": true,
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [
                            "The account of the authorized spender."
                        ],
                        "indexed": true,
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "docs": [
                            "The new allowance amount."
                        ],
                        "indexed": false,
                        "label": "value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "docs": [
                    "Emitted when the allowance of a `spender` for an `owner` is set or changed."
                ],
                "label": "Approval",
                "module_path": "pendzl_contracts::token::psp22",
                "signature_topic": "0x1a35e726f5feffda199144f6097b2ba23713e549bfcbe090c0981e3bcdfbcc1d"
            },
            {
                "args": [
                    {
                        "docs": [
                            "The `RoleType` for which the admin role is changed. This is the role being modified."
                        ],
                        "indexed": true,
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [
                            "The `RoleType` representing the previous admin role for the `role`. Indicates the admin role before the change."
                        ],
                        "indexed": false,
                        "label": "previous",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [
                            "The `RoleType` representing the new admin role set for the `role`. Indicates the updated admin role."
                        ],
                        "indexed": false,
                        "label": "new",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    }
                ],
                "docs": [
                    "Emitted when the admin role for a specific role is changed.",
                    "",
                    "This event is triggered whenever a `role`'s admin role is updated.",
                    "It logs the `role` being modified, the `previous` admin role, and the `new` admin role set for that `role`."
                ],
                "label": "RoleAdminChanged",
                "module_path": "pendzl_contracts::access::access_control",
                "signature_topic": "0xde670cace683976bfdc92b54b661961802f8322e8cead41fd76e5d7ca65dc403"
            },
            {
                "args": [
                    {
                        "docs": [
                            "The `RoleType` that is granted. This field identifies the specific role being assigned."
                        ],
                        "indexed": true,
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [
                            "The `AccountId` of the account receiving the `role`. Represents the beneficiary of the role assignment."
                        ],
                        "indexed": true,
                        "label": "grantee",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    },
                    {
                        "docs": [
                            "The `AccountId` of the account that granted the `role`. This is the account responsible for the role assignment."
                        ],
                        "indexed": true,
                        "label": "grantor",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    }
                ],
                "docs": [
                    "Emitted when a role is granted to an account.",
                    "",
                    "This event occurs when a new `role` is assigned to an `grantee`.",
                    "The `grantor` who assigned the role is also logged."
                ],
                "label": "RoleGranted",
                "module_path": "pendzl_contracts::access::access_control",
                "signature_topic": "0x4178b665aa7310f609a3da6698348eabe212f3b0bd0386791eeae4924095b76b"
            },
            {
                "args": [
                    {
                        "docs": [
                            "The `RoleType` that is revoked. Specifies the role being removed from the account."
                        ],
                        "indexed": true,
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [
                            "The `AccountId` of the account from which the `role` is being removed. Denotes the account losing the role."
                        ],
                        "indexed": true,
                        "label": "account",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    },
                    {
                        "docs": [
                            "The `AccountId` of the account that performed the role revocation. Indicates who initiated the removal of the role."
                        ],
                        "indexed": true,
                        "label": "sender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "docs": [
                    "Emitted when a role is revoked from an account.",
                    "",
                    "This event is triggered when an existing `role` is removed from an `account`.",
                    "The `sender` who performed the revocation is also included."
                ],
                "label": "RoleRevoked",
                "module_path": "pendzl_contracts::access::access_control",
                "signature_topic": "0x00d57dbcb9a54f822039e86efe3513a9af40deb0e6a9ee6cecf39824f8d27e9b"
            }
        ],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 133
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "proposal",
                        "type": {
                            "displayName": [
                                "Proposal"
                            ],
                            "type": 134
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovern::propose",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 139
                },
                "selector": "0xfb78be0a"
            },
            {
                "args": [
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovern::finalize",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 127
                },
                "selector": "0x66d3e5f6"
            },
            {
                "args": [
                    {
                        "label": "proposal",
                        "type": {
                            "displayName": [
                                "Proposal"
                            ],
                            "type": 134
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovern::execute",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 127
                },
                "selector": "0xa4417227"
            },
            {
                "args": [
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "vote",
                        "type": {
                            "displayName": [
                                "Vote"
                            ],
                            "type": 90
                        }
                    },
                    {
                        "label": "_reason",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 138
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovern::vote",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 127
                },
                "selector": "0x02a24471"
            },
            {
                "args": [
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovern::force_unstake",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 127
                },
                "selector": "0x611e3405"
            },
            {
                "args": [
                    {
                        "label": "rules",
                        "type": {
                            "displayName": [
                                "VotingRules"
                            ],
                            "type": 50
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernManage::change_voting_rules",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 127
                },
                "selector": "0xace48fbf"
            },
            {
                "args": [
                    {
                        "label": "period",
                        "type": {
                            "displayName": [
                                "Timestamp"
                            ],
                            "type": 48
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernManage::change_unstake_period",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 127
                },
                "selector": "0x6640e3db"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::vester",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 141
                },
                "selector": "0x7f455b75"
            },
            {
                "args": [
                    {
                        "label": "proposal",
                        "type": {
                            "displayName": [
                                "Proposal"
                            ],
                            "type": 134
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::hash",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 142
                },
                "selector": "0xa757fb12"
            },
            {
                "args": [
                    {
                        "label": "description",
                        "type": {
                            "displayName": [
                                "String"
                            ],
                            "type": 37
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::hash_description",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 142
                },
                "selector": "0x5fab4200"
            },
            {
                "args": [
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::hash_by_id",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 143
                },
                "selector": "0x118785e1"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::rules",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 145
                },
                "selector": "0x2b287936"
            },
            {
                "args": [
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::status",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 146
                },
                "selector": "0x25459c14"
            },
            {
                "args": [
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::minimum_to_finalize",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 148
                },
                "selector": "0xed144b89"
            },
            {
                "args": [
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::state",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 150
                },
                "selector": "0x75267b5f"
            },
            {
                "args": [
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "proposal_id",
                        "type": {
                            "displayName": [
                                "ProposalId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::vote_of_for",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 152
                },
                "selector": "0xee1d4716"
            },
            {
                "args": [
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::last_force_unstakes",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 154
                },
                "selector": "0x33481a19"
            },
            {
                "args": [
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::last_stake_timestamp",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 156
                },
                "selector": "0xdc8a1e9a"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::active_proposals",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 157
                },
                "selector": "0xd61345c3"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::finalized_proposals",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 157
                },
                "selector": "0x5b1a9527"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::executed_proposals",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 157
                },
                "selector": "0x3f02171d"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "AbaxGovernView::next_proposal_id",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 157
                },
                "selector": "0xd9b0842a"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "ProvideVestScheduleInfo::get_waiting_and_vesting_durations",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 158
                },
                "selector": "0x078994bf"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP22::total_supply",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x162df8c2"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::balance_of",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x6568382f"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::allowance",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x4d47d921"
            },
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "data",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 138
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::transfer",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 161
                },
                "selector": "0xdb20f9f5"
            },
            {
                "args": [
                    {
                        "label": "from",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "data",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 138
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::transfer_from",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 161
                },
                "selector": "0x54b3c76e"
            },
            {
                "args": [
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::approve",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 161
                },
                "selector": "0xb20f1bbd"
            },
            {
                "args": [
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "delta_value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::increase_allowance",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 161
                },
                "selector": "0x96d6b57a"
            },
            {
                "args": [
                    {
                        "label": "spender",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "delta_value",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22::decrease_allowance",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 161
                },
                "selector": "0xfecb57d5"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::asset",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 141
                },
                "selector": "0x6b787d8e"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::total_assets",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x01ecb508"
            },
            {
                "args": [
                    {
                        "label": "assets",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "round",
                        "type": {
                            "displayName": [
                                "Rounding"
                            ],
                            "type": 163
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::convert_to_shares",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 164
                },
                "selector": "0xc3722f26"
            },
            {
                "args": [
                    {
                        "label": "shares",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "round",
                        "type": {
                            "displayName": [
                                "Rounding"
                            ],
                            "type": 163
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::convert_to_assets",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 164
                },
                "selector": "0x69dbfb3d"
            },
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::max_deposit",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x7db5d0b0"
            },
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::max_mint",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x50e36dc6"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::max_withdraw",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x8acacf75"
            },
            {
                "args": [
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::max_redeem",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 160
                },
                "selector": "0x248643a9"
            },
            {
                "args": [
                    {
                        "label": "assets",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::preview_deposit",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 164
                },
                "selector": "0x258f56ea"
            },
            {
                "args": [
                    {
                        "label": "shares",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::preview_mint",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 164
                },
                "selector": "0x585ae483"
            },
            {
                "args": [
                    {
                        "label": "assets",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::preview_withdraw",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 164
                },
                "selector": "0x3970357e"
            },
            {
                "args": [
                    {
                        "label": "shares",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::preview_redeem",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 164
                },
                "selector": "0x076204e6"
            },
            {
                "args": [
                    {
                        "label": "assets",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "receiver",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::deposit",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 166
                },
                "selector": "0xe6a168cb"
            },
            {
                "args": [
                    {
                        "label": "shares",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "receiver",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::mint",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 166
                },
                "selector": "0xbe36c73a"
            },
            {
                "args": [
                    {
                        "label": "assets",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "receiver",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::withdraw",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 166
                },
                "selector": "0x7fe8757a"
            },
            {
                "args": [
                    {
                        "label": "shares",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 15
                        }
                    },
                    {
                        "label": "receiver",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    },
                    {
                        "label": "owner",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 9
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "PSP22Vault::redeem",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 166
                },
                "selector": "0xb997ec8f"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP22Metadata::token_name",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 168
                },
                "selector": "0x3d261bd4"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP22Metadata::token_symbol",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 168
                },
                "selector": "0x34205be5"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "PSP22Metadata::token_decimals",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 169
                },
                "selector": "0x7271b782"
            },
            {
                "args": [
                    {
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "address",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AccessControl::has_role",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 170
                },
                "selector": "0xc1d9ac18"
            },
            {
                "args": [
                    {
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AccessControl::get_role_admin",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 157
                },
                "selector": "0x83da3bb2"
            },
            {
                "args": [
                    {
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AccessControl::grant_role",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 171
                },
                "selector": "0x4ac062fd"
            },
            {
                "args": [
                    {
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AccessControl::revoke_role",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 171
                },
                "selector": "0x6e4f0991"
            },
            {
                "args": [
                    {
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "account",
                        "type": {
                            "displayName": [
                                "Option"
                            ],
                            "type": 8
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AccessControl::renounce_role",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 171
                },
                "selector": "0xeaf1248a"
            },
            {
                "args": [
                    {
                        "label": "role",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "new_admin",
                        "type": {
                            "displayName": [
                                "RoleType"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "AccessControl::set_role_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 171
                },
                "selector": "0x71a64883"
            },
            {
                "args": [
                    {
                        "label": "set_code_hash",
                        "type": {
                            "displayName": [
                                "Hash"
                            ],
                            "type": 70
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "SetCodeHash::set_code_hash",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 173
                },
                "selector": "0xabb60cdf"
            }
        ]
    },
    "storage": {
        "root": {
            "layout": {
                "struct": {
                    "fields": [
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xf9372874",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0xf9372874",
                                                    "ty": 1
                                                }
                                            },
                                            "name": "admin_roles"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x510afc69",
                                                            "ty": 4
                                                        }
                                                    },
                                                    "root_key": "0x510afc69",
                                                    "ty": 6
                                                }
                                            },
                                            "name": "members"
                                        }
                                    ],
                                    "name": "AccessControlData"
                                }
                            },
                            "name": "access_control"
                        },
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xc629684f",
                                                            "ty": 15
                                                        }
                                                    },
                                                    "root_key": "0xc629684f",
                                                    "ty": 16
                                                }
                                            },
                                            "name": "total_supply"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xffbbddfc",
                                                            "ty": 15
                                                        }
                                                    },
                                                    "root_key": "0xffbbddfc",
                                                    "ty": 20
                                                }
                                            },
                                            "name": "balances"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x7c996051",
                                                            "ty": 15
                                                        }
                                                    },
                                                    "root_key": "0x7c996051",
                                                    "ty": 24
                                                }
                                            },
                                            "name": "allowances"
                                        }
                                    ],
                                    "name": "PSP22Data"
                                }
                            },
                            "name": "psp22"
                        },
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x4f255229",
                                                                            "ty": 9
                                                                        }
                                                                    },
                                                                    "name": "account_id"
                                                                }
                                                            ],
                                                            "name": "__ink_TraitCallBuilderPSP22"
                                                        }
                                                    },
                                                    "root_key": "0x4f255229",
                                                    "ty": 29
                                                }
                                            },
                                            "name": "asset"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x5e6a9f46",
                                                            "ty": 11
                                                        }
                                                    },
                                                    "root_key": "0x5e6a9f46",
                                                    "ty": 33
                                                }
                                            },
                                            "name": "underlying_decimals"
                                        }
                                    ],
                                    "name": "PSP22VaultData"
                                }
                            },
                            "name": "vault"
                        },
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0x6209318b",
                                                            "name": "Option",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [],
                                                                    "name": "None"
                                                                },
                                                                "1": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "leaf": {
                                                                                    "key": "0x6209318b",
                                                                                    "ty": 37
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "Some"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "root_key": "0x6209318b",
                                                    "ty": 38
                                                }
                                            },
                                            "name": "name"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "enum": {
                                                            "dispatchKey": "0xd6e34d4a",
                                                            "name": "Option",
                                                            "variants": {
                                                                "0": {
                                                                    "fields": [],
                                                                    "name": "None"
                                                                },
                                                                "1": {
                                                                    "fields": [
                                                                        {
                                                                            "layout": {
                                                                                "leaf": {
                                                                                    "key": "0xd6e34d4a",
                                                                                    "ty": 37
                                                                                }
                                                                            },
                                                                            "name": "0"
                                                                        }
                                                                    ],
                                                                    "name": "Some"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "root_key": "0xd6e34d4a",
                                                    "ty": 43
                                                }
                                            },
                                            "name": "symbol"
                                        }
                                    ],
                                    "name": "PSP22MetadataData"
                                }
                            },
                            "name": "metadata"
                        },
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x2d210923",
                                                                            "ty": 47
                                                                        }
                                                                    },
                                                                    "name": "minimum_stake_part_e3"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x2d210923",
                                                                            "ty": 47
                                                                        }
                                                                    },
                                                                    "name": "proposer_deposit_part_e3"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x2d210923",
                                                                            "ty": 48
                                                                        }
                                                                    },
                                                                    "name": "initial_period"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x2d210923",
                                                                            "ty": 48
                                                                        }
                                                                    },
                                                                    "name": "flat_period"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x2d210923",
                                                                            "ty": 48
                                                                        }
                                                                    },
                                                                    "name": "final_period"
                                                                }
                                                            ],
                                                            "name": "VotingRules"
                                                        }
                                                    },
                                                    "root_key": "0x2d210923",
                                                    "ty": 49
                                                }
                                            },
                                            "name": "rules"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x3c0d4bfb",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0x3c0d4bfb",
                                                    "ty": 54
                                                }
                                            },
                                            "name": "active_proposals"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xfdeb30ef",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0xfdeb30ef",
                                                    "ty": 58
                                                }
                                            },
                                            "name": "finalized_proposals"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x00ce0fff",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0x00ce0fff",
                                                    "ty": 62
                                                }
                                            },
                                            "name": "executed_proposals"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x73b1c629",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0x73b1c629",
                                                    "ty": 66
                                                }
                                            },
                                            "name": "next_proposal_id"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x93b86735",
                                                            "ty": 70
                                                        }
                                                    },
                                                    "root_key": "0x93b86735",
                                                    "ty": 71
                                                }
                                            },
                                            "name": "proposal_id_to_hash"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x8996a888",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0x8996a888",
                                                    "ty": 75
                                                }
                                            },
                                            "name": "proposal_hash_to_id"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "enum": {
                                                                            "dispatchKey": "0x38cb06c1",
                                                                            "name": "ProposalStatus",
                                                                            "variants": {
                                                                                "0": {
                                                                                    "fields": [],
                                                                                    "name": "Active"
                                                                                },
                                                                                "1": {
                                                                                    "fields": [],
                                                                                    "name": "Defeated"
                                                                                },
                                                                                "2": {
                                                                                    "fields": [],
                                                                                    "name": "DefeatedWithSlash"
                                                                                },
                                                                                "3": {
                                                                                    "fields": [],
                                                                                    "name": "Succeeded"
                                                                                },
                                                                                "4": {
                                                                                    "fields": [],
                                                                                    "name": "Executed"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "name": "status"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 79
                                                                        }
                                                                    },
                                                                    "name": "force_unstake_possible"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 9
                                                                        }
                                                                    },
                                                                    "name": "proposer"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 48
                                                                        }
                                                                    },
                                                                    "name": "start"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 15
                                                                        }
                                                                    },
                                                                    "name": "votes_at_start"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 15
                                                                        }
                                                                    },
                                                                    "name": "counter_at_start"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "enum": {
                                                                            "dispatchKey": "0x38cb06c1",
                                                                            "name": "Option",
                                                                            "variants": {
                                                                                "0": {
                                                                                    "fields": [],
                                                                                    "name": "None"
                                                                                },
                                                                                "1": {
                                                                                    "fields": [
                                                                                        {
                                                                                            "layout": {
                                                                                                "leaf": {
                                                                                                    "key": "0x38cb06c1",
                                                                                                    "ty": 48
                                                                                                }
                                                                                            },
                                                                                            "name": "0"
                                                                                        }
                                                                                    ],
                                                                                    "name": "Some"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "name": "finalized"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 15
                                                                        }
                                                                    },
                                                                    "name": "votes_for"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 15
                                                                        }
                                                                    },
                                                                    "name": "votes_against"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x38cb06c1",
                                                                            "ty": 15
                                                                        }
                                                                    },
                                                                    "name": "votes_against_with_slash"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "enum": {
                                                                            "dispatchKey": "0x38cb06c1",
                                                                            "name": "Option",
                                                                            "variants": {
                                                                                "0": {
                                                                                    "fields": [],
                                                                                    "name": "None"
                                                                                },
                                                                                "1": {
                                                                                    "fields": [
                                                                                        {
                                                                                            "layout": {
                                                                                                "leaf": {
                                                                                                    "key": "0x38cb06c1",
                                                                                                    "ty": 48
                                                                                                }
                                                                                            },
                                                                                            "name": "0"
                                                                                        }
                                                                                    ],
                                                                                    "name": "Some"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "name": "earliest_execution"
                                                                }
                                                            ],
                                                            "name": "ProposalState"
                                                        }
                                                    },
                                                    "root_key": "0x38cb06c1",
                                                    "ty": 80
                                                }
                                            },
                                            "name": "state"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "enum": {
                                                                            "dispatchKey": "0x87eee4c8",
                                                                            "name": "Vote",
                                                                            "variants": {
                                                                                "0": {
                                                                                    "fields": [],
                                                                                    "name": "Agreed"
                                                                                },
                                                                                "1": {
                                                                                    "fields": [],
                                                                                    "name": "Disagreed"
                                                                                },
                                                                                "2": {
                                                                                    "fields": [],
                                                                                    "name": "DisagreedWithProposerSlashing"
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "name": "vote"
                                                                },
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x87eee4c8",
                                                                            "ty": 15
                                                                        }
                                                                    },
                                                                    "name": "amount"
                                                                }
                                                            ],
                                                            "name": "UserVote"
                                                        }
                                                    },
                                                    "root_key": "0x87eee4c8",
                                                    "ty": 87
                                                }
                                            },
                                            "name": "votes"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x83f1a318",
                                                            "ty": 48
                                                        }
                                                    },
                                                    "root_key": "0x83f1a318",
                                                    "ty": 94
                                                }
                                            },
                                            "name": "last_stake_timestamp"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x99481209",
                                                            "ty": 0
                                                        }
                                                    },
                                                    "root_key": "0x99481209",
                                                    "ty": 98
                                                }
                                            },
                                            "name": "last_force_unstake"
                                        }
                                    ],
                                    "name": "GovernData"
                                }
                            },
                            "name": "govern"
                        },
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xe8b0dbaa",
                                                            "ty": 15
                                                        }
                                                    },
                                                    "root_key": "0xe8b0dbaa",
                                                    "ty": 102
                                                }
                                            },
                                            "name": "counter"
                                        }
                                    ],
                                    "name": "VaultCounterData"
                                }
                            },
                            "name": "counter"
                        },
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x45f11825",
                                                            "ty": 15
                                                        }
                                                    },
                                                    "root_key": "0x45f11825",
                                                    "ty": 106
                                                }
                                            },
                                            "name": "locked"
                                        }
                                    ],
                                    "name": "LockedSharesData"
                                }
                            },
                            "name": "lock"
                        },
                        {
                            "layout": {
                                "struct": {
                                    "fields": [
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "struct": {
                                                            "fields": [
                                                                {
                                                                    "layout": {
                                                                        "leaf": {
                                                                            "key": "0x08e45cab",
                                                                            "ty": 9
                                                                        }
                                                                    },
                                                                    "name": "account_id"
                                                                }
                                                            ],
                                                            "name": "__ink_TraitCallBuilderGeneralVest"
                                                        }
                                                    },
                                                    "root_key": "0x08e45cab",
                                                    "ty": 110
                                                }
                                            },
                                            "name": "general_vester"
                                        },
                                        {
                                            "layout": {
                                                "root": {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0xa1e9e75a",
                                                            "ty": 48
                                                        }
                                                    },
                                                    "root_key": "0xa1e9e75a",
                                                    "ty": 114
                                                }
                                            },
                                            "name": "unstake_period"
                                        }
                                    ],
                                    "name": "UnstakeData"
                                }
                            },
                            "name": "unstake"
                        }
                    ],
                    "name": "Governor"
                }
            },
            "root_key": "0x00000000",
            "ty": 118
        }
    },
    "types": [
        {
            "id": 0,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 1,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 0
                    },
                    {
                        "name": "V",
                        "type": 0
                    },
                    {
                        "name": "KeyType",
                        "type": 2
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 2,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 3
                    },
                    {
                        "name": "R",
                        "type": 5
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 3,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 6,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 7
                    },
                    {
                        "name": "V",
                        "type": 4
                    },
                    {
                        "name": "KeyType",
                        "type": 12
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 7,
            "type": {
                "def": {
                    "tuple": [
                        0,
                        8
                    ]
                }
            }
        },
        {
            "id": 8,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 9
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 9,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 10,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "AccountId"
                ]
            }
        },
        {
            "id": 10,
            "type": {
                "def": {
                    "array": {
                        "len": 32,
                        "type": 11
                    }
                }
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "primitive": "u8"
                }
            }
        },
        {
            "id": 12,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 13
                    },
                    {
                        "name": "R",
                        "type": 14
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 14,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 15
                    },
                    {
                        "name": "KeyType",
                        "type": 17
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 17,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 18
                    },
                    {
                        "name": "R",
                        "type": 19
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 18,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 19,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 20,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 9
                    },
                    {
                        "name": "V",
                        "type": 15
                    },
                    {
                        "name": "KeyType",
                        "type": 21
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 21,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 22
                    },
                    {
                        "name": "R",
                        "type": 23
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 22,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 23,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 24,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 25
                    },
                    {
                        "name": "V",
                        "type": 15
                    },
                    {
                        "name": "KeyType",
                        "type": 26
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 25,
            "type": {
                "def": {
                    "tuple": [
                        9,
                        9
                    ]
                }
            }
        },
        {
            "id": 26,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 27
                    },
                    {
                        "name": "R",
                        "type": 28
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 27,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 28,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 29,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 9
                    },
                    {
                        "name": "KeyType",
                        "type": 30
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 30,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 31
                    },
                    {
                        "name": "R",
                        "type": 32
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 31,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 32,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 33,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 11
                    },
                    {
                        "name": "KeyType",
                        "type": 34
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 34,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 35
                    },
                    {
                        "name": "R",
                        "type": 36
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 35,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 36,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 37,
            "type": {
                "def": {
                    "primitive": "str"
                }
            }
        },
        {
            "id": 38,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 39
                    },
                    {
                        "name": "KeyType",
                        "type": 40
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 39,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 37
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 37
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 40,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 41
                    },
                    {
                        "name": "R",
                        "type": 42
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 41,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 42,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 43,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 39
                    },
                    {
                        "name": "KeyType",
                        "type": 44
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 44,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 45
                    },
                    {
                        "name": "R",
                        "type": 46
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 45,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 46,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 47,
            "type": {
                "def": {
                    "primitive": "u16"
                }
            }
        },
        {
            "id": 48,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 49,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 50
                    },
                    {
                        "name": "KeyType",
                        "type": 51
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 50,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "minimum_stake_part_e3",
                                "type": 47,
                                "typeName": "u16"
                            },
                            {
                                "name": "proposer_deposit_part_e3",
                                "type": 47,
                                "typeName": "u16"
                            },
                            {
                                "name": "initial_period",
                                "type": 48,
                                "typeName": "Timestamp"
                            },
                            {
                                "name": "flat_period",
                                "type": 48,
                                "typeName": "Timestamp"
                            },
                            {
                                "name": "final_period",
                                "type": 48,
                                "typeName": "Timestamp"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "structs",
                    "VotingRules"
                ]
            }
        },
        {
            "id": 51,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 52
                    },
                    {
                        "name": "R",
                        "type": 53
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 52,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 53,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 54,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 0
                    },
                    {
                        "name": "KeyType",
                        "type": 55
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 55,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 56
                    },
                    {
                        "name": "R",
                        "type": 57
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 56,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 57,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 58,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 0
                    },
                    {
                        "name": "KeyType",
                        "type": 59
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 59,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 60
                    },
                    {
                        "name": "R",
                        "type": 61
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 60,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 61,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 62,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 0
                    },
                    {
                        "name": "KeyType",
                        "type": 63
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 63,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 64
                    },
                    {
                        "name": "R",
                        "type": 65
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 64,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 65,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 66,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 0
                    },
                    {
                        "name": "KeyType",
                        "type": 67
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 67,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 68
                    },
                    {
                        "name": "R",
                        "type": 69
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 68,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 69,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 70,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 10,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "Hash"
                ]
            }
        },
        {
            "id": 71,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 0
                    },
                    {
                        "name": "V",
                        "type": 70
                    },
                    {
                        "name": "KeyType",
                        "type": 72
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 72,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 73
                    },
                    {
                        "name": "R",
                        "type": 74
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 73,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 74,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 75,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 70
                    },
                    {
                        "name": "V",
                        "type": 0
                    },
                    {
                        "name": "KeyType",
                        "type": 76
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 76,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 77
                    },
                    {
                        "name": "R",
                        "type": 78
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 77,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 78,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 79,
            "type": {
                "def": {
                    "primitive": "bool"
                }
            }
        },
        {
            "id": 80,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 0
                    },
                    {
                        "name": "V",
                        "type": 81
                    },
                    {
                        "name": "KeyType",
                        "type": 84
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 81,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "status",
                                "type": 82,
                                "typeName": "ProposalStatus"
                            },
                            {
                                "name": "force_unstake_possible",
                                "type": 79,
                                "typeName": "bool"
                            },
                            {
                                "name": "proposer",
                                "type": 9,
                                "typeName": "AccountId"
                            },
                            {
                                "name": "start",
                                "type": 48,
                                "typeName": "Timestamp"
                            },
                            {
                                "name": "votes_at_start",
                                "type": 15,
                                "typeName": "Balance"
                            },
                            {
                                "name": "counter_at_start",
                                "type": 15,
                                "typeName": "Balance"
                            },
                            {
                                "name": "finalized",
                                "type": 83,
                                "typeName": "Option<Timestamp>"
                            },
                            {
                                "name": "votes_for",
                                "type": 15,
                                "typeName": "Balance"
                            },
                            {
                                "name": "votes_against",
                                "type": 15,
                                "typeName": "Balance"
                            },
                            {
                                "name": "votes_against_with_slash",
                                "type": 15,
                                "typeName": "Balance"
                            },
                            {
                                "name": "earliest_execution",
                                "type": 83,
                                "typeName": "Option<Timestamp>"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "structs",
                    "ProposalState"
                ]
            }
        },
        {
            "id": 82,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "Active"
                            },
                            {
                                "index": 1,
                                "name": "Defeated"
                            },
                            {
                                "index": 2,
                                "name": "DefeatedWithSlash"
                            },
                            {
                                "index": 3,
                                "name": "Succeeded"
                            },
                            {
                                "index": 4,
                                "name": "Executed"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "structs",
                    "ProposalStatus"
                ]
            }
        },
        {
            "id": 83,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 48
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 48
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 84,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 85
                    },
                    {
                        "name": "R",
                        "type": 86
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 85,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 86,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 87,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 88
                    },
                    {
                        "name": "V",
                        "type": 89
                    },
                    {
                        "name": "KeyType",
                        "type": 91
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 88,
            "type": {
                "def": {
                    "tuple": [
                        9,
                        0
                    ]
                }
            }
        },
        {
            "id": 89,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "vote",
                                "type": 90,
                                "typeName": "Vote"
                            },
                            {
                                "name": "amount",
                                "type": 15,
                                "typeName": "Balance"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "structs",
                    "UserVote"
                ]
            }
        },
        {
            "id": 90,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "Agreed"
                            },
                            {
                                "index": 1,
                                "name": "Disagreed"
                            },
                            {
                                "index": 2,
                                "name": "DisagreedWithProposerSlashing"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "structs",
                    "Vote"
                ]
            }
        },
        {
            "id": 91,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 92
                    },
                    {
                        "name": "R",
                        "type": 93
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 92,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 93,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 94,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 9
                    },
                    {
                        "name": "V",
                        "type": 48
                    },
                    {
                        "name": "KeyType",
                        "type": 95
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 95,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 96
                    },
                    {
                        "name": "R",
                        "type": 97
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 96,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 97,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 98,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 9
                    },
                    {
                        "name": "V",
                        "type": 0
                    },
                    {
                        "name": "KeyType",
                        "type": 99
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 99,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 100
                    },
                    {
                        "name": "R",
                        "type": 101
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 100,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 101,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 102,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 15
                    },
                    {
                        "name": "KeyType",
                        "type": 103
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 103,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 104
                    },
                    {
                        "name": "R",
                        "type": 105
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 104,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 105,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 106,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "K",
                        "type": 0
                    },
                    {
                        "name": "V",
                        "type": 15
                    },
                    {
                        "name": "KeyType",
                        "type": 107
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "mapping",
                    "Mapping"
                ]
            }
        },
        {
            "id": 107,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 108
                    },
                    {
                        "name": "R",
                        "type": 109
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 108,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 109,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 110,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 9
                    },
                    {
                        "name": "KeyType",
                        "type": 111
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 111,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 112
                    },
                    {
                        "name": "R",
                        "type": 113
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 112,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 113,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 114,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "V",
                        "type": 48
                    },
                    {
                        "name": "KeyType",
                        "type": 115
                    }
                ],
                "path": [
                    "ink_storage",
                    "lazy",
                    "Lazy"
                ]
            }
        },
        {
            "id": 115,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "L",
                        "type": 116
                    },
                    {
                        "name": "R",
                        "type": 117
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ResolverKey"
                ]
            }
        },
        {
            "id": 116,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 117,
            "type": {
                "def": {
                    "composite": {}
                },
                "params": [
                    {
                        "name": "ParentKey",
                        "type": 4
                    }
                ],
                "path": [
                    "ink_storage_traits",
                    "impls",
                    "ManualKey"
                ]
            }
        },
        {
            "id": 118,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "access_control",
                                "type": 119,
                                "typeName": "<AccessControlData as::ink::storage::traits::AutoStorableHint<::\nink::storage::traits::ManualKey<415313365u32, ()>,>>::Type"
                            },
                            {
                                "name": "psp22",
                                "type": 120,
                                "typeName": "<PSP22Data as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<3129535625u32, ()>,>>::Type"
                            },
                            {
                                "name": "vault",
                                "type": 121,
                                "typeName": "<PSP22VaultData as::ink::storage::traits::AutoStorableHint<::ink\n::storage::traits::ManualKey<2931186038u32, ()>,>>::Type"
                            },
                            {
                                "name": "metadata",
                                "type": 122,
                                "typeName": "<PSP22MetadataData as::ink::storage::traits::AutoStorableHint<::\nink::storage::traits::ManualKey<3234974900u32, ()>,>>::Type"
                            },
                            {
                                "name": "govern",
                                "type": 123,
                                "typeName": "<GovernData as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<2761491774u32, ()>,>>::Type"
                            },
                            {
                                "name": "counter",
                                "type": 124,
                                "typeName": "<VaultCounterData as::ink::storage::traits::AutoStorableHint<::ink\n::storage::traits::ManualKey<814988897u32, ()>,>>::Type"
                            },
                            {
                                "name": "lock",
                                "type": 125,
                                "typeName": "<LockedSharesData as::ink::storage::traits::AutoStorableHint<::ink\n::storage::traits::ManualKey<3247410691u32, ()>,>>::Type"
                            },
                            {
                                "name": "unstake",
                                "type": 126,
                                "typeName": "<UnstakeData as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<2965636650u32, ()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "governor",
                    "Governor"
                ]
            }
        },
        {
            "id": 119,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "admin_roles",
                                "type": 1,
                                "typeName": "<Mapping<RoleType, RoleType,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_ACCESSCONTROLDATA_ADMIN_ROLES>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n2891666076u32, ()>,>>::Type"
                            },
                            {
                                "name": "members",
                                "type": 6,
                                "typeName": "<Mapping<(RoleType, Option<AccountId>), (),::ink::storage::traits\n::ManualKey<STORAGE_KEY_ACCESSCONTROLDATA_MEMBERS>> as::ink::storage\n::traits::AutoStorableHint<::ink::storage::traits::ManualKey<\n1717912264u32, ()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "access",
                    "access_control",
                    "implementation",
                    "AccessControlData"
                ]
            }
        },
        {
            "id": 120,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "total_supply",
                                "type": 16,
                                "typeName": "<::ink::storage::Lazy<Balance,::ink::storage::traits::\nManualKey<STORAGE_KEY_PSP22DATA_TOTAL_SUPPLY>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n2948691470u32, ()>,>>::Type"
                            },
                            {
                                "name": "balances",
                                "type": 20,
                                "typeName": "<Mapping<AccountId, Balance,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PSP22DATA_BALANCES>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<1170687700u32,\n()>,>>::Type"
                            },
                            {
                                "name": "allowances",
                                "type": 24,
                                "typeName": "<Mapping<(AccountId, AccountId), Balance,::ink::storage::traits::\nManualKey<STORAGE_KEY_PSP22DATA_ALLOWANCES>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n15709089u32, ()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "token",
                    "psp22",
                    "implementation",
                    "PSP22Data"
                ]
            }
        },
        {
            "id": 121,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "asset",
                                "type": 29,
                                "typeName": "<::ink::storage::Lazy<PSP22Ref,::ink::storage::traits::\nManualKey<STORAGE_KEY_PSP22VAULTDATA_ASSET>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n673747853u32, ()>,>>::Type"
                            },
                            {
                                "name": "underlying_decimals",
                                "type": 33,
                                "typeName": "<::ink::storage::Lazy<u8,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PSP22VAULTDATA_UNDERLYING_DECIMALS>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n332803272u32, ()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "token",
                    "psp22",
                    "extensions",
                    "vault",
                    "implementation",
                    "PSP22VaultData"
                ]
            }
        },
        {
            "id": 122,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "name",
                                "type": 38,
                                "typeName": "<::ink::storage::Lazy<Option<String>,::ink::storage::traits\n::ManualKey<STORAGE_KEY_PSP22METADATADATA_NAME>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n3194321569u32, ()>,>>::Type"
                            },
                            {
                                "name": "symbol",
                                "type": 43,
                                "typeName": "<::ink::storage::Lazy<Option<String>,::ink::storage::traits\n::ManualKey<STORAGE_KEY_PSP22METADATADATA_SYMBOL>> as::ink::storage\n::traits::AutoStorableHint<::ink::storage::traits::ManualKey<\n4160644838u32, ()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "token",
                    "psp22",
                    "extensions",
                    "metadata",
                    "vault_implementation",
                    "PSP22MetadataData"
                ]
            }
        },
        {
            "id": 123,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "rules",
                                "type": 49,
                                "typeName": "<::ink::storage::Lazy<VotingRules,::ink::storage::traits::\nManualKey<STORAGE_KEY_GOVERNDATA_RULES>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<577196433u32, ()\n>,>>::Type"
                            },
                            {
                                "name": "active_proposals",
                                "type": 54,
                                "typeName": "<::ink::storage::Lazy<u32,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_GOVERNDATA_ACTIVE_PROPOSALS>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<1575632642u32,\n()>,>>::Type"
                            },
                            {
                                "name": "finalized_proposals",
                                "type": 58,
                                "typeName": "<::ink::storage::Lazy<u32,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_GOVERNDATA_FINALIZED_PROPOSALS>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<873313438u32,\n()>,>>::Type"
                            },
                            {
                                "name": "executed_proposals",
                                "type": 62,
                                "typeName": "<::ink::storage::Lazy<u32,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_GOVERNDATA_EXECUTED_PROPOSALS>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n1984369469u32, ()>,>>::Type"
                            },
                            {
                                "name": "next_proposal_id",
                                "type": 66,
                                "typeName": "<::ink::storage::Lazy<ProposalId,::ink::storage::traits::\nManualKey<STORAGE_KEY_GOVERNDATA_NEXT_PROPOSAL_ID>> as::ink::storage\n::traits::AutoStorableHint<::ink::storage::traits::ManualKey<\n574869580u32, ()>,>>::Type"
                            },
                            {
                                "name": "proposal_id_to_hash",
                                "type": 71,
                                "typeName": "<Mapping<ProposalId, Hash,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_GOVERNDATA_PROPOSAL_ID_TO_HASH>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n2822849311u32, ()>,>>::Type"
                            },
                            {
                                "name": "proposal_hash_to_id",
                                "type": 75,
                                "typeName": "<Mapping<Hash, ProposalId,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_GOVERNDATA_PROPOSAL_HASH_TO_ID>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n1527090195u32, ()>,>>::Type"
                            },
                            {
                                "name": "state",
                                "type": 80,
                                "typeName": "<Mapping<ProposalId, ProposalState,::ink::storage::traits::\nManualKey<STORAGE_KEY_GOVERNDATA_STATE>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<1432459859u32,\n()>,>>::Type"
                            },
                            {
                                "name": "votes",
                                "type": 87,
                                "typeName": "<Mapping<(AccountId, ProposalId), UserVote,::ink::storage::traits::\nManualKey<STORAGE_KEY_GOVERNDATA_VOTES>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<1268214756u32,\n()>,>>::Type"
                            },
                            {
                                "name": "last_stake_timestamp",
                                "type": 94,
                                "typeName": "<Mapping<AccountId, Timestamp,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_GOVERNDATA_LAST_STAKE_TIMESTAMP>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n3086900163u32, ()>,>>::Type"
                            },
                            {
                                "name": "last_force_unstake",
                                "type": 98,
                                "typeName": "<Mapping<AccountId, ProposalId,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_GOVERNDATA_LAST_FORCE_UNSTAKE>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n1555622964u32, ()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "storage",
                    "govern_storage_item",
                    "GovernData"
                ]
            }
        },
        {
            "id": 124,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "counter",
                                "type": 102,
                                "typeName": "<::ink::storage::Lazy<u128,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_VAULTCOUNTERDATA_COUNTER>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<2879836648u32,\n()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "storage",
                    "vault_counter_storage_item",
                    "VaultCounterData"
                ]
            }
        },
        {
            "id": 125,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "locked",
                                "type": 106,
                                "typeName": "<Mapping<ProposalId, Balance,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_LOCKEDSHARESDATA_LOCKED>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<1980085846u32,\n()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "storage",
                    "locked_shares_storage_item",
                    "LockedSharesData"
                ]
            }
        },
        {
            "id": 126,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "general_vester",
                                "type": 110,
                                "typeName": "<::ink::storage::Lazy<GeneralVestRef,::ink::storage::traits::\nManualKey<STORAGE_KEY_UNSTAKEDATA_GENERAL_VESTER>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n3823152085u32, ()>,>>::Type"
                            },
                            {
                                "name": "unstake_period",
                                "type": 114,
                                "typeName": "<::ink::storage::Lazy<Timestamp,::ink::storage::traits::\nManualKey<STORAGE_KEY_UNSTAKEDATA_UNSTAKE_PERIOD>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n1033429691u32, ()>,>>::Type"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "storage",
                    "unstake_storage_item",
                    "UnstakeData"
                ]
            }
        },
        {
            "id": 127,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 128
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 128
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 128,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 129
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 129
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 129,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 130,
                                        "typeName": "MathError"
                                    }
                                ],
                                "index": 0,
                                "name": "MathError"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 131,
                                        "typeName": "PSP22Error"
                                    }
                                ],
                                "index": 1,
                                "name": "PSP22Error"
                            },
                            {
                                "index": 2,
                                "name": "InsuficientVotes"
                            },
                            {
                                "index": 3,
                                "name": "ProposalAlreadyExists"
                            },
                            {
                                "index": 4,
                                "name": "ProposalDoesntExist"
                            },
                            {
                                "index": 5,
                                "name": "WrongStatus"
                            },
                            {
                                "index": 6,
                                "name": "TooEarlyToExecuteProposal"
                            },
                            {
                                "index": 7,
                                "name": "FinalizeCondition"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 37,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 8,
                                "name": "UnderlyingTransactionReverted"
                            },
                            {
                                "index": 9,
                                "name": "CantForceUnstake"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 132,
                                        "typeName": "AccessControlError"
                                    }
                                ],
                                "index": 10,
                                "name": "AccessControlError"
                            },
                            {
                                "index": 11,
                                "name": "UnstakeShorterThanVotingPeriod"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "errors",
                    "GovernError"
                ]
            }
        },
        {
            "id": 130,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "Underflow"
                            },
                            {
                                "index": 1,
                                "name": "Overflow"
                            },
                            {
                                "index": 2,
                                "name": "DivByZero"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_lang",
                    "math",
                    "errors",
                    "MathError"
                ]
            }
        },
        {
            "id": 131,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 37,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 0,
                                "name": "Custom"
                            },
                            {
                                "index": 1,
                                "name": "InsufficientBalance"
                            },
                            {
                                "index": 2,
                                "name": "InsufficientAllowance"
                            },
                            {
                                "index": 3,
                                "name": "ZeroRecipientAddress"
                            },
                            {
                                "index": 4,
                                "name": "ZeroSenderAddress"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 37,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 5,
                                "name": "SafeTransferCheckFailed"
                            },
                            {
                                "index": 6,
                                "name": "PermitInvalidSignature"
                            },
                            {
                                "index": 7,
                                "name": "PermitExpired"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "token",
                    "psp22",
                    "PSP22Error"
                ]
            }
        },
        {
            "id": 132,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "InvalidCaller"
                            },
                            {
                                "index": 1,
                                "name": "MissingRole"
                            },
                            {
                                "index": 2,
                                "name": "RoleRedundant"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "access",
                    "access_control",
                    "AccessControlError"
                ]
            }
        },
        {
            "id": 133,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 1,
                                "name": "CouldNotReadInput"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "LangError"
                ]
            }
        },
        {
            "id": 134,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "transactions",
                                "type": 135,
                                "typeName": "Vec<Transaction>"
                            },
                            {
                                "name": "description_hash",
                                "type": 70,
                                "typeName": "Hash"
                            },
                            {
                                "name": "description_url",
                                "type": 37,
                                "typeName": "String"
                            },
                            {
                                "name": "earliest_execution",
                                "type": 83,
                                "typeName": "Option<Timestamp>"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "structs",
                    "Proposal"
                ]
            }
        },
        {
            "id": 135,
            "type": {
                "def": {
                    "sequence": {
                        "type": 136
                    }
                }
            }
        },
        {
            "id": 136,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "callee",
                                "type": 9,
                                "typeName": "AccountId"
                            },
                            {
                                "name": "selector",
                                "type": 137,
                                "typeName": "[u8; 4]"
                            },
                            {
                                "name": "input",
                                "type": 138,
                                "typeName": "Vec<u8>"
                            },
                            {
                                "name": "transferred_value",
                                "type": 15,
                                "typeName": "Balance"
                            }
                        ]
                    }
                },
                "path": [
                    "governor",
                    "modules",
                    "govern",
                    "traits",
                    "structs",
                    "Transaction"
                ]
            }
        },
        {
            "id": 137,
            "type": {
                "def": {
                    "array": {
                        "len": 4,
                        "type": 11
                    }
                }
            }
        },
        {
            "id": 138,
            "type": {
                "def": {
                    "sequence": {
                        "type": 11
                    }
                }
            }
        },
        {
            "id": 139,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 140
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 140
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 140,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 129
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    },
                    {
                        "name": "E",
                        "type": 129
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 141,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 9
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 9
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 142,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 70
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 70
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 143,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 144
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 144
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 144,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 70
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 70
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 145,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 50
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 50
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 146,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 147
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 147
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 147,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 82
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 82
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 148,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 149
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 149
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 149,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 15
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 15
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 150,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 151
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 151
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 151,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 81
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 81
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 152,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 153
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 153
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 153,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 89
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 89
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 154,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 155
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 155
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 155,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 156,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 83
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 83
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 157,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 0
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 158,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 159
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 159
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 159,
            "type": {
                "def": {
                    "tuple": [
                        48,
                        48
                    ]
                }
            }
        },
        {
            "id": 160,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 15
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 15
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 161,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 162
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 162
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 162,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 131
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 131
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 163,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "Up"
                            },
                            {
                                "index": 1,
                                "name": "Down"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_lang",
                    "math",
                    "operations",
                    "Rounding"
                ]
            }
        },
        {
            "id": 164,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 165
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 165
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 165,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 15
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 130
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 15
                    },
                    {
                        "name": "E",
                        "type": 130
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 166,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 167
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 167
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 167,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 15
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 131
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 15
                    },
                    {
                        "name": "E",
                        "type": 131
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 168,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 39
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 39
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 169,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 11
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 170,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 79
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 79
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 171,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 172
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 172
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 172,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 132
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 132
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 173,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 174
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 133
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 174
                    },
                    {
                        "name": "E",
                        "type": 133
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 174,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 4
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 175
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 4
                    },
                    {
                        "name": "E",
                        "type": 175
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 175,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 37,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 0,
                                "name": "Custom"
                            },
                            {
                                "index": 1,
                                "name": "SetCodeHashFailed"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 37,
                                        "typeName": "String"
                                    }
                                ],
                                "index": 2,
                                "name": "PermissionError"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "upgradeability",
                    "set_code_hash",
                    "SetCodeHashError"
                ]
            }
        },
        {
            "id": 176,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 48,
                                        "typeName": "Timestamp"
                                    },
                                    {
                                        "type": 48,
                                        "typeName": "Timestamp"
                                    }
                                ],
                                "index": 0,
                                "name": "Constant"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 177,
                                        "typeName": "ExternalTimeConstraint"
                                    }
                                ],
                                "index": 1,
                                "name": "External"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "finance",
                    "general_vest",
                    "VestingSchedule"
                ]
            }
        },
        {
            "id": 177,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "name": "account",
                                "type": 9,
                                "typeName": "AccountId"
                            },
                            {
                                "name": "fallback_values",
                                "type": 159,
                                "typeName": "(Timestamp, Timestamp)"
                            }
                        ]
                    }
                },
                "path": [
                    "pendzl_contracts",
                    "finance",
                    "general_vest",
                    "ExternalTimeConstraint"
                ]
            }
        },
        {
            "id": 178,
            "type": {
                "def": {
                    "variant": {}
                },
                "path": [
                    "ink_env",
                    "types",
                    "NoChainExtension"
                ]
            }
        }
    ],
    "version": 5
}

const _abi = new Abi(metadata)

export function decodeEvent(bytes: Bytes, topics: Bytes[]): Event {
    return _abi.decodeEvent(bytes, topics)
}

export function decodeMessage(bytes: Bytes): Message {
    return _abi.decodeMessage(bytes)
}

export function decodeConstructor(bytes: Bytes): Constructor {
    return _abi.decodeConstructor(bytes)
}

export interface Chain {
    rpc: {
        call<T=any>(method: string, params?: unknown[]): Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: Bytes, private blockHash?: Bytes) { }

    AbaxGovernView_vester(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x7f455b75', [])
    }

    AbaxGovernView_hash(proposal: Proposal): Promise<Result<Hash, LangError>> {
        return this.stateCall('0xa757fb12', [proposal])
    }

    AbaxGovernView_hash_description(description: String): Promise<Result<Hash, LangError>> {
        return this.stateCall('0x5fab4200', [description])
    }

    AbaxGovernView_hash_by_id(proposal_id: number): Promise<Result<(Hash | undefined), LangError>> {
        return this.stateCall('0x118785e1', [proposal_id])
    }

    AbaxGovernView_rules(): Promise<Result<VotingRules, LangError>> {
        return this.stateCall('0x2b287936', [])
    }

    AbaxGovernView_status(proposal_id: number): Promise<Result<(ProposalStatus | undefined), LangError>> {
        return this.stateCall('0x25459c14', [proposal_id])
    }

    AbaxGovernView_minimum_to_finalize(proposal_id: number): Promise<Result<(Balance | undefined), LangError>> {
        return this.stateCall('0xed144b89', [proposal_id])
    }

    AbaxGovernView_state(proposal_id: number): Promise<Result<(ProposalState | undefined), LangError>> {
        return this.stateCall('0x75267b5f', [proposal_id])
    }

    AbaxGovernView_vote_of_for(account: AccountId, proposal_id: number): Promise<Result<(UserVote | undefined), LangError>> {
        return this.stateCall('0xee1d4716', [account, proposal_id])
    }

    AbaxGovernView_last_force_unstakes(account: AccountId): Promise<Result<(number | undefined), LangError>> {
        return this.stateCall('0x33481a19', [account])
    }

    AbaxGovernView_last_stake_timestamp(account: AccountId): Promise<Result<(Timestamp | undefined), LangError>> {
        return this.stateCall('0xdc8a1e9a', [account])
    }

    AbaxGovernView_active_proposals(): Promise<Result<number, LangError>> {
        return this.stateCall('0xd61345c3', [])
    }

    AbaxGovernView_finalized_proposals(): Promise<Result<number, LangError>> {
        return this.stateCall('0x5b1a9527', [])
    }

    AbaxGovernView_executed_proposals(): Promise<Result<number, LangError>> {
        return this.stateCall('0x3f02171d', [])
    }

    AbaxGovernView_next_proposal_id(): Promise<Result<number, LangError>> {
        return this.stateCall('0xd9b0842a', [])
    }

    ProvideVestScheduleInfo_get_waiting_and_vesting_durations(): Promise<Result<[Timestamp, Timestamp], LangError>> {
        return this.stateCall('0x078994bf', [])
    }

    PSP22_total_supply(): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x162df8c2', [])
    }

    PSP22_balance_of(owner: AccountId): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x6568382f', [owner])
    }

    PSP22_allowance(owner: AccountId, spender: AccountId): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x4d47d921', [owner, spender])
    }

    PSP22Vault_asset(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x6b787d8e', [])
    }

    PSP22Vault_total_assets(): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x01ecb508', [])
    }

    PSP22Vault_convert_to_shares(assets: Balance, round: Rounding): Promise<Result<Result<Balance, MathError>, LangError>> {
        return this.stateCall('0xc3722f26', [assets, round])
    }

    PSP22Vault_convert_to_assets(shares: Balance, round: Rounding): Promise<Result<Result<Balance, MathError>, LangError>> {
        return this.stateCall('0x69dbfb3d', [shares, round])
    }

    PSP22Vault_max_deposit(to: AccountId): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x7db5d0b0', [to])
    }

    PSP22Vault_max_mint(to: AccountId): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x50e36dc6', [to])
    }

    PSP22Vault_max_withdraw(owner: AccountId): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x8acacf75', [owner])
    }

    PSP22Vault_max_redeem(owner: AccountId): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x248643a9', [owner])
    }

    PSP22Vault_preview_deposit(assets: Balance): Promise<Result<Result<Balance, MathError>, LangError>> {
        return this.stateCall('0x258f56ea', [assets])
    }

    PSP22Vault_preview_mint(shares: Balance): Promise<Result<Result<Balance, MathError>, LangError>> {
        return this.stateCall('0x585ae483', [shares])
    }

    PSP22Vault_preview_withdraw(assets: Balance): Promise<Result<Result<Balance, MathError>, LangError>> {
        return this.stateCall('0x3970357e', [assets])
    }

    PSP22Vault_preview_redeem(shares: Balance): Promise<Result<Result<Balance, MathError>, LangError>> {
        return this.stateCall('0x076204e6', [shares])
    }

    PSP22Metadata_token_name(): Promise<Result<(String | undefined), LangError>> {
        return this.stateCall('0x3d261bd4', [])
    }

    PSP22Metadata_token_symbol(): Promise<Result<(String | undefined), LangError>> {
        return this.stateCall('0x34205be5', [])
    }

    PSP22Metadata_token_decimals(): Promise<Result<number, LangError>> {
        return this.stateCall('0x7271b782', [])
    }

    AccessControl_has_role(role: number, address: (AccountId | undefined)): Promise<Result<boolean, LangError>> {
        return this.stateCall('0xc1d9ac18', [role, address])
    }

    AccessControl_get_role_admin(role: number): Promise<Result<number, LangError>> {
        return this.stateCall('0x83da3bb2', [role])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type MathError = MathError_DivByZero | MathError_Overflow | MathError_Underflow

export interface MathError_DivByZero {
    __kind: 'DivByZero'
}

export interface MathError_Overflow {
    __kind: 'Overflow'
}

export interface MathError_Underflow {
    __kind: 'Underflow'
}

export type Rounding = Rounding_Down | Rounding_Up

export interface Rounding_Down {
    __kind: 'Down'
}

export interface Rounding_Up {
    __kind: 'Up'
}

export type Timestamp = bigint

export interface UserVote {
    vote: Vote
    amount: Balance
}

export type Vote = Vote_Agreed | Vote_Disagreed | Vote_DisagreedWithProposerSlashing

export interface Vote_Agreed {
    __kind: 'Agreed'
}

export interface Vote_Disagreed {
    __kind: 'Disagreed'
}

export interface Vote_DisagreedWithProposerSlashing {
    __kind: 'DisagreedWithProposerSlashing'
}

export interface ProposalState {
    status: ProposalStatus
    forceUnstakePossible: boolean
    proposer: AccountId
    start: Timestamp
    votesAtStart: Balance
    counterAtStart: Balance
    finalized?: (Timestamp | undefined)
    votesFor: Balance
    votesAgainst: Balance
    votesAgainstWithSlash: Balance
    earliestExecution?: (Timestamp | undefined)
}

export type Balance = bigint

export type ProposalStatus = ProposalStatus_Active | ProposalStatus_Defeated | ProposalStatus_DefeatedWithSlash | ProposalStatus_Executed | ProposalStatus_Succeeded

export interface ProposalStatus_Active {
    __kind: 'Active'
}

export interface ProposalStatus_Defeated {
    __kind: 'Defeated'
}

export interface ProposalStatus_DefeatedWithSlash {
    __kind: 'DefeatedWithSlash'
}

export interface ProposalStatus_Executed {
    __kind: 'Executed'
}

export interface ProposalStatus_Succeeded {
    __kind: 'Succeeded'
}

export interface VotingRules {
    minimumStakePartE3: number
    proposerDepositPartE3: number
    initialPeriod: Timestamp
    flatPeriod: Timestamp
    finalPeriod: Timestamp
}

export type String = string

export type Hash = Bytes

export interface Proposal {
    transactions: Transaction[]
    descriptionHash: Hash
    descriptionUrl: String
    earliestExecution?: (Timestamp | undefined)
}

export interface Transaction {
    callee: AccountId
    selector: Bytes
    input: Vec
    transferredValue: Balance
}

export type Vec = Bytes

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type AccountId = Bytes

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    asset: AccountId
    vester: AccountId
    foundation: AccountId
    parametersAdmin?: (AccountId | undefined)
    unstakePeriod: Timestamp
    name: String
    symbol: String
    rules: VotingRules
}

export type Message = Message_AbaxGovernManage_change_unstake_period | Message_AbaxGovernManage_change_voting_rules | Message_AbaxGovernView_active_proposals | Message_AbaxGovernView_executed_proposals | Message_AbaxGovernView_finalized_proposals | Message_AbaxGovernView_hash | Message_AbaxGovernView_hash_by_id | Message_AbaxGovernView_hash_description | Message_AbaxGovernView_last_force_unstakes | Message_AbaxGovernView_last_stake_timestamp | Message_AbaxGovernView_minimum_to_finalize | Message_AbaxGovernView_next_proposal_id | Message_AbaxGovernView_rules | Message_AbaxGovernView_state | Message_AbaxGovernView_status | Message_AbaxGovernView_vester | Message_AbaxGovernView_vote_of_for | Message_AbaxGovern_execute | Message_AbaxGovern_finalize | Message_AbaxGovern_force_unstake | Message_AbaxGovern_propose | Message_AbaxGovern_vote | Message_AccessControl_get_role_admin | Message_AccessControl_grant_role | Message_AccessControl_has_role | Message_AccessControl_renounce_role | Message_AccessControl_revoke_role | Message_AccessControl_set_role_admin | Message_PSP22Metadata_token_decimals | Message_PSP22Metadata_token_name | Message_PSP22Metadata_token_symbol | Message_PSP22Vault_asset | Message_PSP22Vault_convert_to_assets | Message_PSP22Vault_convert_to_shares | Message_PSP22Vault_deposit | Message_PSP22Vault_max_deposit | Message_PSP22Vault_max_mint | Message_PSP22Vault_max_redeem | Message_PSP22Vault_max_withdraw | Message_PSP22Vault_mint | Message_PSP22Vault_preview_deposit | Message_PSP22Vault_preview_mint | Message_PSP22Vault_preview_redeem | Message_PSP22Vault_preview_withdraw | Message_PSP22Vault_redeem | Message_PSP22Vault_total_assets | Message_PSP22Vault_withdraw | Message_PSP22_allowance | Message_PSP22_approve | Message_PSP22_balance_of | Message_PSP22_decrease_allowance | Message_PSP22_increase_allowance | Message_PSP22_total_supply | Message_PSP22_transfer | Message_PSP22_transfer_from | Message_ProvideVestScheduleInfo_get_waiting_and_vesting_durations | Message_SetCodeHash_set_code_hash

export interface Message_AbaxGovernManage_change_unstake_period {
    __kind: 'AbaxGovernManage_change_unstake_period'
    period: Timestamp
}

export interface Message_AbaxGovernManage_change_voting_rules {
    __kind: 'AbaxGovernManage_change_voting_rules'
    rules: VotingRules
}

export interface Message_AbaxGovernView_active_proposals {
    __kind: 'AbaxGovernView_active_proposals'
}

export interface Message_AbaxGovernView_executed_proposals {
    __kind: 'AbaxGovernView_executed_proposals'
}

export interface Message_AbaxGovernView_finalized_proposals {
    __kind: 'AbaxGovernView_finalized_proposals'
}

export interface Message_AbaxGovernView_hash {
    __kind: 'AbaxGovernView_hash'
    proposal: Proposal
}

export interface Message_AbaxGovernView_hash_by_id {
    __kind: 'AbaxGovernView_hash_by_id'
    proposalId: number
}

export interface Message_AbaxGovernView_hash_description {
    __kind: 'AbaxGovernView_hash_description'
    description: String
}

export interface Message_AbaxGovernView_last_force_unstakes {
    __kind: 'AbaxGovernView_last_force_unstakes'
    account: AccountId
}

export interface Message_AbaxGovernView_last_stake_timestamp {
    __kind: 'AbaxGovernView_last_stake_timestamp'
    account: AccountId
}

export interface Message_AbaxGovernView_minimum_to_finalize {
    __kind: 'AbaxGovernView_minimum_to_finalize'
    proposalId: number
}

export interface Message_AbaxGovernView_next_proposal_id {
    __kind: 'AbaxGovernView_next_proposal_id'
}

export interface Message_AbaxGovernView_rules {
    __kind: 'AbaxGovernView_rules'
}

export interface Message_AbaxGovernView_state {
    __kind: 'AbaxGovernView_state'
    proposalId: number
}

export interface Message_AbaxGovernView_status {
    __kind: 'AbaxGovernView_status'
    proposalId: number
}

export interface Message_AbaxGovernView_vester {
    __kind: 'AbaxGovernView_vester'
}

export interface Message_AbaxGovernView_vote_of_for {
    __kind: 'AbaxGovernView_vote_of_for'
    account: AccountId
    proposalId: number
}

export interface Message_AbaxGovern_execute {
    __kind: 'AbaxGovern_execute'
    proposal: Proposal
}

export interface Message_AbaxGovern_finalize {
    __kind: 'AbaxGovern_finalize'
    proposalId: number
}

export interface Message_AbaxGovern_force_unstake {
    __kind: 'AbaxGovern_force_unstake'
    account: AccountId
    proposalId: number
}

export interface Message_AbaxGovern_propose {
    __kind: 'AbaxGovern_propose'
    proposal: Proposal
}

export interface Message_AbaxGovern_vote {
    __kind: 'AbaxGovern_vote'
    proposalId: number
    vote: Vote
    reason: Vec
}

export interface Message_AccessControl_get_role_admin {
    __kind: 'AccessControl_get_role_admin'
    role: number
}

export interface Message_AccessControl_grant_role {
    __kind: 'AccessControl_grant_role'
    role: number
    account?: (AccountId | undefined)
}

export interface Message_AccessControl_has_role {
    __kind: 'AccessControl_has_role'
    role: number
    address?: (AccountId | undefined)
}

export interface Message_AccessControl_renounce_role {
    __kind: 'AccessControl_renounce_role'
    role: number
    account?: (AccountId | undefined)
}

export interface Message_AccessControl_revoke_role {
    __kind: 'AccessControl_revoke_role'
    role: number
    account?: (AccountId | undefined)
}

export interface Message_AccessControl_set_role_admin {
    __kind: 'AccessControl_set_role_admin'
    role: number
    newAdmin: number
}

export interface Message_PSP22Metadata_token_decimals {
    __kind: 'PSP22Metadata_token_decimals'
}

export interface Message_PSP22Metadata_token_name {
    __kind: 'PSP22Metadata_token_name'
}

export interface Message_PSP22Metadata_token_symbol {
    __kind: 'PSP22Metadata_token_symbol'
}

export interface Message_PSP22Vault_asset {
    __kind: 'PSP22Vault_asset'
}

export interface Message_PSP22Vault_convert_to_assets {
    __kind: 'PSP22Vault_convert_to_assets'
    shares: Balance
    round: Rounding
}

export interface Message_PSP22Vault_convert_to_shares {
    __kind: 'PSP22Vault_convert_to_shares'
    assets: Balance
    round: Rounding
}

export interface Message_PSP22Vault_deposit {
    __kind: 'PSP22Vault_deposit'
    assets: Balance
    receiver: AccountId
}

export interface Message_PSP22Vault_max_deposit {
    __kind: 'PSP22Vault_max_deposit'
    to: AccountId
}

export interface Message_PSP22Vault_max_mint {
    __kind: 'PSP22Vault_max_mint'
    to: AccountId
}

export interface Message_PSP22Vault_max_redeem {
    __kind: 'PSP22Vault_max_redeem'
    owner: AccountId
}

export interface Message_PSP22Vault_max_withdraw {
    __kind: 'PSP22Vault_max_withdraw'
    owner: AccountId
}

export interface Message_PSP22Vault_mint {
    __kind: 'PSP22Vault_mint'
    shares: Balance
    receiver: AccountId
}

export interface Message_PSP22Vault_preview_deposit {
    __kind: 'PSP22Vault_preview_deposit'
    assets: Balance
}

export interface Message_PSP22Vault_preview_mint {
    __kind: 'PSP22Vault_preview_mint'
    shares: Balance
}

export interface Message_PSP22Vault_preview_redeem {
    __kind: 'PSP22Vault_preview_redeem'
    shares: Balance
}

export interface Message_PSP22Vault_preview_withdraw {
    __kind: 'PSP22Vault_preview_withdraw'
    assets: Balance
}

export interface Message_PSP22Vault_redeem {
    __kind: 'PSP22Vault_redeem'
    shares: Balance
    receiver: AccountId
    owner: AccountId
}

export interface Message_PSP22Vault_total_assets {
    __kind: 'PSP22Vault_total_assets'
}

export interface Message_PSP22Vault_withdraw {
    __kind: 'PSP22Vault_withdraw'
    assets: Balance
    receiver: AccountId
    owner: AccountId
}

export interface Message_PSP22_allowance {
    __kind: 'PSP22_allowance'
    owner: AccountId
    spender: AccountId
}

export interface Message_PSP22_approve {
    __kind: 'PSP22_approve'
    spender: AccountId
    value: Balance
}

export interface Message_PSP22_balance_of {
    __kind: 'PSP22_balance_of'
    owner: AccountId
}

export interface Message_PSP22_decrease_allowance {
    __kind: 'PSP22_decrease_allowance'
    spender: AccountId
    deltaValue: Balance
}

export interface Message_PSP22_increase_allowance {
    __kind: 'PSP22_increase_allowance'
    spender: AccountId
    deltaValue: Balance
}

export interface Message_PSP22_total_supply {
    __kind: 'PSP22_total_supply'
}

export interface Message_PSP22_transfer {
    __kind: 'PSP22_transfer'
    to: AccountId
    value: Balance
    data: Vec
}

export interface Message_PSP22_transfer_from {
    __kind: 'PSP22_transfer_from'
    from: AccountId
    to: AccountId
    value: Balance
    data: Vec
}

export interface Message_ProvideVestScheduleInfo_get_waiting_and_vesting_durations {
    __kind: 'ProvideVestScheduleInfo_get_waiting_and_vesting_durations'
}

export interface Message_SetCodeHash_set_code_hash {
    __kind: 'SetCodeHash_set_code_hash'
    setCodeHash: Hash
}

export type Event = Event_Approval | Event_Deposit | Event_ProposalCreated | Event_ProposalExecuted | Event_ProposalFinalized | Event_RoleAdminChanged | Event_RoleGranted | Event_RoleRevoked | Event_TokenReleased | Event_Transfer | Event_UnstakePeriodChanged | Event_VestingScheduled | Event_VoteCasted | Event_VotingRulesChanged | Event_Withdraw

export interface Event_Approval {
    __kind: 'Approval'
    /**
     * The account of the token owner.
     */
    owner: AccountId
    /**
     * The account of the authorized spender.
     */
    spender: AccountId
    /**
     * The new allowance amount.
     */
    value: Balance
}

export interface Event_Deposit {
    __kind: 'Deposit'
    sender: AccountId
    owner: AccountId
    assets: Balance
    shares: Balance
}

export interface Event_ProposalCreated {
    __kind: 'ProposalCreated'
    proposalId: number
    proposalHash: Hash
    proposal: Proposal
}

export interface Event_ProposalExecuted {
    __kind: 'ProposalExecuted'
    proposalId: number
}

export interface Event_ProposalFinalized {
    __kind: 'ProposalFinalized'
    proposalId: number
    status: ProposalStatus
}

export interface Event_RoleAdminChanged {
    __kind: 'RoleAdminChanged'
    /**
     * The `RoleType` for which the admin role is changed. This is the role being modified.
     */
    role: number
    /**
     * The `RoleType` representing the previous admin role for the `role`. Indicates the admin role before the change.
     */
    previous: number
    /**
     * The `RoleType` representing the new admin role set for the `role`. Indicates the updated admin role.
     */
    new: number
}

export interface Event_RoleGranted {
    __kind: 'RoleGranted'
    /**
     * The `RoleType` that is granted. This field identifies the specific role being assigned.
     */
    role: number
    /**
     * The `AccountId` of the account receiving the `role`. Represents the beneficiary of the role assignment.
     */
    grantee?: (AccountId | undefined)
    /**
     * The `AccountId` of the account that granted the `role`. This is the account responsible for the role assignment.
     */
    grantor?: (AccountId | undefined)
}

export interface Event_RoleRevoked {
    __kind: 'RoleRevoked'
    /**
     * The `RoleType` that is revoked. Specifies the role being removed from the account.
     */
    role: number
    /**
     * The `AccountId` of the account from which the `role` is being removed. Denotes the account losing the role.
     */
    account?: (AccountId | undefined)
    /**
     * The `AccountId` of the account that performed the role revocation. Indicates who initiated the removal of the role.
     */
    sender: AccountId
}

export interface Event_TokenReleased {
    __kind: 'TokenReleased'
    /**
     * The account that triggered the release.
     */
    caller: AccountId
    /**
     * The account to which the tokens are sent.
     */
    to: AccountId
    /**
     * The locked asset.
     */
    asset?: (AccountId | undefined)
    /**
     * The amount of tokens released.
     */
    amount: Balance
}

export interface Event_Transfer {
    __kind: 'Transfer'
    /**
     * The account from which the tokens are transferred. `None` for minting operations.
     */
    from?: (AccountId | undefined)
    /**
     * The account to which the tokens are transferred. `None` for burning operations.
     */
    to?: (AccountId | undefined)
    /**
     * The amount of tokens transferred.
     */
    value: Balance
}

export interface Event_UnstakePeriodChanged {
    __kind: 'UnstakePeriodChanged'
    unstakePeriod: Timestamp
}

export interface Event_VestingScheduled {
    __kind: 'VestingScheduled'
    creator: AccountId
    /**
     * The locked asset.
     */
    asset?: (AccountId | undefined)
    /**
     * The account to which the tokens will be sent.
     */
    receiver: AccountId
    /**
     * The amount of tokens released.
     */
    amount: Balance
    schedule: VestingSchedule
}

export interface Event_VoteCasted {
    __kind: 'VoteCasted'
    account: AccountId
    proposalId: number
    vote: Vote
}

export interface Event_VotingRulesChanged {
    __kind: 'VotingRulesChanged'
    rules: VotingRules
}

export interface Event_Withdraw {
    __kind: 'Withdraw'
    sender: AccountId
    receiver: AccountId
    owner: AccountId
    assets: Balance
    shares: Balance
}

export type VestingSchedule = VestingSchedule_Constant | VestingSchedule_External

export interface VestingSchedule_Constant {
    __kind: 'Constant'
    value: [Timestamp, Timestamp]
}

export interface VestingSchedule_External {
    __kind: 'External'
    value: ExternalTimeConstraint
}

export interface ExternalTimeConstraint {
    account: AccountId
    fallbackValues: [Timestamp, Timestamp]
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
