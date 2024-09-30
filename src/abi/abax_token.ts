import { Abi, Bytes, encodeCall, decodeResult } from "@subsquid/ink-abi";

export const metadata = {
  source: {
    hash: "0x0035c1197569193c293a79d7e0b0ce01abb1d81bf9df077291745da7ff81231b",
    language: "ink! 5.0.0",
    compiler: "rustc 1.77.2",
    build_info: {
      build_mode: "Release",
      cargo_contract_version: "4.1.1",
      rust_toolchain: "stable-x86_64-unknown-linux-gnu",
      wasm_opt_settings: {
        keep_debug_symbols: false,
        optimization_passes: "Z",
      },
    },
  },
  contract: {
    name: "abax_token",
    version: "1.0.0",
    authors: [""],
  },
  image: "paritytech/contracts-verifiable:4.1.1",
  spec: {
    constructors: [
      {
        args: [
          {
            label: "name",
            type: {
              displayName: ["String"],
              type: 29,
            },
          },
          {
            label: "symbol",
            type: {
              displayName: ["String"],
              type: 29,
            },
          },
          {
            label: "decimal",
            type: {
              displayName: ["u8"],
              type: 11,
            },
          },
        ],
        default: false,
        docs: [],
        label: "new",
        payable: false,
        returnType: {
          displayName: ["ink_primitives", "ConstructorResult"],
          type: 66,
        },
        selector: "0x9bae9d5e",
      },
    ],
    docs: [],
    environment: {
      accountId: {
        displayName: ["AccountId"],
        type: 9,
      },
      balance: {
        displayName: ["Balance"],
        type: 15,
      },
      blockNumber: {
        displayName: ["BlockNumber"],
        type: 0,
      },
      chainExtension: {
        displayName: ["ChainExtension"],
        type: 84,
      },
      hash: {
        displayName: ["Hash"],
        type: 80,
      },
      maxEventTopics: 4,
      staticBufferSize: 16384,
      timestamp: {
        displayName: ["Timestamp"],
        type: 51,
      },
    },
    events: [
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "cap",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        docs: [],
        label: "CapUpdated",
        module_path: "abax_token::abax_token",
        signature_topic:
          "0x7514dd87908f9a7dc45fd5a063d922a23d1093212f0a0ab9c354aa2905e95b05",
      },
      {
        args: [
          {
            docs: [
              "The account from which the tokens are transferred. `None` for minting operations.",
            ],
            indexed: true,
            label: "from",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
          {
            docs: [
              "The account to which the tokens are transferred. `None` for burning operations.",
            ],
            indexed: true,
            label: "to",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
          {
            docs: ["The amount of tokens transferred."],
            indexed: false,
            label: "value",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        docs: [
          "Emitted when tokens are transferred, including zero value transfers.",
        ],
        label: "Transfer",
        module_path: "pendzl_contracts::token::psp22",
        signature_topic:
          "0xb5b61a3e6a21a16be4f044b517c28ac692492f73c5bfd3f60178ad98c767f4cb",
      },
      {
        args: [
          {
            docs: ["The account of the token owner."],
            indexed: true,
            label: "owner",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: ["The account of the authorized spender."],
            indexed: true,
            label: "spender",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: ["The new allowance amount."],
            indexed: false,
            label: "value",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        docs: [
          "Emitted when the allowance of a `spender` for an `owner` is set or changed.",
        ],
        label: "Approval",
        module_path: "pendzl_contracts::token::psp22",
        signature_topic:
          "0x1a35e726f5feffda199144f6097b2ba23713e549bfcbe090c0981e3bcdfbcc1d",
      },
      {
        args: [
          {
            docs: [
              "The `RoleType` for which the admin role is changed. This is the role being modified.",
            ],
            indexed: true,
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            docs: [
              "The `RoleType` representing the previous admin role for the `role`. Indicates the admin role before the change.",
            ],
            indexed: false,
            label: "previous",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            docs: [
              "The `RoleType` representing the new admin role set for the `role`. Indicates the updated admin role.",
            ],
            indexed: false,
            label: "new",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
        ],
        docs: [
          "Emitted when the admin role for a specific role is changed.",
          "",
          "This event is triggered whenever a `role`'s admin role is updated.",
          "It logs the `role` being modified, the `previous` admin role, and the `new` admin role set for that `role`.",
        ],
        label: "RoleAdminChanged",
        module_path: "pendzl_contracts::access::access_control",
        signature_topic:
          "0xde670cace683976bfdc92b54b661961802f8322e8cead41fd76e5d7ca65dc403",
      },
      {
        args: [
          {
            docs: [
              "The `RoleType` that is granted. This field identifies the specific role being assigned.",
            ],
            indexed: true,
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            docs: [
              "The `AccountId` of the account receiving the `role`. Represents the beneficiary of the role assignment.",
            ],
            indexed: true,
            label: "grantee",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
          {
            docs: [
              "The `AccountId` of the account that granted the `role`. This is the account responsible for the role assignment.",
            ],
            indexed: true,
            label: "grantor",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
        ],
        docs: [
          "Emitted when a role is granted to an account.",
          "",
          "This event occurs when a new `role` is assigned to an `grantee`.",
          "The `grantor` who assigned the role is also logged.",
        ],
        label: "RoleGranted",
        module_path: "pendzl_contracts::access::access_control",
        signature_topic:
          "0x4178b665aa7310f609a3da6698348eabe212f3b0bd0386791eeae4924095b76b",
      },
      {
        args: [
          {
            docs: [
              "The `RoleType` that is revoked. Specifies the role being removed from the account.",
            ],
            indexed: true,
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            docs: [
              "The `AccountId` of the account from which the `role` is being removed. Denotes the account losing the role.",
            ],
            indexed: true,
            label: "account",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
          {
            docs: [
              "The `AccountId` of the account that performed the role revocation. Indicates who initiated the removal of the role.",
            ],
            indexed: true,
            label: "sender",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        docs: [
          "Emitted when a role is revoked from an account.",
          "",
          "This event is triggered when an existing `role` is removed from an `account`.",
          "The `sender` who performed the revocation is also included.",
        ],
        label: "RoleRevoked",
        module_path: "pendzl_contracts::access::access_control",
        signature_topic:
          "0x00d57dbcb9a54f822039e86efe3513a9af40deb0e6a9ee6cecf39824f8d27e9b",
      },
    ],
    lang_error: {
      displayName: ["ink", "LangError"],
      type: 69,
    },
    messages: [
      {
        args: [
          {
            label: "to",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "amount",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxToken::generate",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 66,
        },
        selector: "0x7834ef46",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "AbaxToken::inflation_rate_per_milisecond",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 70,
        },
        selector: "0x1a49428d",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "AbaxToken::cap",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 70,
        },
        selector: "0xead91e26",
      },
      {
        args: [
          {
            label: "to",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "amount",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22Mintable::mint",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 66,
        },
        selector: "0xfc3c75d4",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "PSP22::total_supply",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 70,
        },
        selector: "0x162df8c2",
      },
      {
        args: [
          {
            label: "owner",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22::balance_of",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 70,
        },
        selector: "0x6568382f",
      },
      {
        args: [
          {
            label: "owner",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "spender",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22::allowance",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 70,
        },
        selector: "0x4d47d921",
      },
      {
        args: [
          {
            label: "to",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "value",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
          {
            label: "data",
            type: {
              displayName: ["Vec"],
              type: 71,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22::transfer",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 66,
        },
        selector: "0xdb20f9f5",
      },
      {
        args: [
          {
            label: "from",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "to",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "value",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
          {
            label: "data",
            type: {
              displayName: ["Vec"],
              type: 71,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22::transfer_from",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 66,
        },
        selector: "0x54b3c76e",
      },
      {
        args: [
          {
            label: "spender",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "value",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22::approve",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 66,
        },
        selector: "0xb20f1bbd",
      },
      {
        args: [
          {
            label: "spender",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "delta_value",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22::increase_allowance",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 66,
        },
        selector: "0x96d6b57a",
      },
      {
        args: [
          {
            label: "spender",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "delta_value",
            type: {
              displayName: ["Balance"],
              type: 15,
            },
          },
        ],
        default: false,
        docs: [],
        label: "PSP22::decrease_allowance",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 66,
        },
        selector: "0xfecb57d5",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "PSP22Metadata::token_name",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 72,
        },
        selector: "0x3d261bd4",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "PSP22Metadata::token_symbol",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 72,
        },
        selector: "0x34205be5",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "PSP22Metadata::token_decimals",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 73,
        },
        selector: "0x7271b782",
      },
      {
        args: [
          {
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            label: "address",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AccessControl::has_role",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 74,
        },
        selector: "0xc1d9ac18",
      },
      {
        args: [
          {
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AccessControl::get_role_admin",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 76,
        },
        selector: "0x83da3bb2",
      },
      {
        args: [
          {
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            label: "account",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AccessControl::grant_role",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 77,
        },
        selector: "0x4ac062fd",
      },
      {
        args: [
          {
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            label: "account",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AccessControl::revoke_role",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 77,
        },
        selector: "0x6e4f0991",
      },
      {
        args: [
          {
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            label: "account",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AccessControl::renounce_role",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 77,
        },
        selector: "0xeaf1248a",
      },
      {
        args: [
          {
            label: "role",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
          {
            label: "new_admin",
            type: {
              displayName: ["RoleType"],
              type: 0,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AccessControl::set_role_admin",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 77,
        },
        selector: "0x71a64883",
      },
      {
        args: [
          {
            label: "set_code_hash",
            type: {
              displayName: ["Hash"],
              type: 80,
            },
          },
        ],
        default: false,
        docs: [],
        label: "SetCodeHash::set_code_hash",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 81,
        },
        selector: "0xabb60cdf",
      },
    ],
  },
  storage: {
    root: {
      layout: {
        struct: {
          fields: [
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0xf9372874",
                              ty: 0,
                            },
                          },
                          root_key: "0xf9372874",
                          ty: 1,
                        },
                      },
                      name: "admin_roles",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x510afc69",
                              ty: 4,
                            },
                          },
                          root_key: "0x510afc69",
                          ty: 6,
                        },
                      },
                      name: "members",
                    },
                  ],
                  name: "AccessControlData",
                },
              },
              name: "access",
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0xc629684f",
                              ty: 15,
                            },
                          },
                          root_key: "0xc629684f",
                          ty: 16,
                        },
                      },
                      name: "total_supply",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0xffbbddfc",
                              ty: 15,
                            },
                          },
                          root_key: "0xffbbddfc",
                          ty: 20,
                        },
                      },
                      name: "balances",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x7c996051",
                              ty: 15,
                            },
                          },
                          root_key: "0x7c996051",
                          ty: 24,
                        },
                      },
                      name: "allowances",
                    },
                  ],
                  name: "PSP22Data",
                },
              },
              name: "psp22",
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            enum: {
                              dispatchKey: "0xd1f34aae",
                              name: "Option",
                              variants: {
                                "0": {
                                  fields: [],
                                  name: "None",
                                },
                                "1": {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0xd1f34aae",
                                          ty: 29,
                                        },
                                      },
                                      name: "0",
                                    },
                                  ],
                                  name: "Some",
                                },
                              },
                            },
                          },
                          root_key: "0xd1f34aae",
                          ty: 30,
                        },
                      },
                      name: "name",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            enum: {
                              dispatchKey: "0x91c80e52",
                              name: "Option",
                              variants: {
                                "0": {
                                  fields: [],
                                  name: "None",
                                },
                                "1": {
                                  fields: [
                                    {
                                      layout: {
                                        leaf: {
                                          key: "0x91c80e52",
                                          ty: 29,
                                        },
                                      },
                                      name: "0",
                                    },
                                  ],
                                  name: "Some",
                                },
                              },
                            },
                          },
                          root_key: "0x91c80e52",
                          ty: 35,
                        },
                      },
                      name: "symbol",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0xd57ae5cd",
                              ty: 11,
                            },
                          },
                          root_key: "0xd57ae5cd",
                          ty: 39,
                        },
                      },
                      name: "decimals",
                    },
                  ],
                  name: "PSP22MetadataData",
                },
              },
              name: "metadata",
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x686d1140",
                              ty: 15,
                            },
                          },
                          root_key: "0x686d1140",
                          ty: 43,
                        },
                      },
                      name: "cap",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x7295d893",
                              ty: 15,
                            },
                          },
                          root_key: "0x7295d893",
                          ty: 47,
                        },
                      },
                      name: "inflation_rate_per_milisecond",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x1eff64e4",
                              ty: 51,
                            },
                          },
                          root_key: "0x1eff64e4",
                          ty: 52,
                        },
                      },
                      name: "last_cap_update",
                    },
                  ],
                  name: "CappedInflation",
                },
              },
              name: "capped_inflation",
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0xc03938f3",
                              ty: 11,
                            },
                          },
                          root_key: "0xc03938f3",
                          ty: 56,
                        },
                      },
                      name: "version",
                    },
                  ],
                  name: "Reserved",
                },
              },
              name: "upgradeable",
            },
          ],
          name: "AbaxTokenContract",
        },
      },
      root_key: "0x00000000",
      ty: 60,
    },
  },
  types: [
    {
      id: 0,
      type: {
        def: {
          primitive: "u32",
        },
      },
    },
    {
      id: 1,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 0,
          },
          {
            name: "V",
            type: 0,
          },
          {
            name: "KeyType",
            type: 2,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 2,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 3,
          },
          {
            name: "R",
            type: 5,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 3,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 4,
      type: {
        def: {
          tuple: [],
        },
      },
    },
    {
      id: 5,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 6,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 7,
          },
          {
            name: "V",
            type: 4,
          },
          {
            name: "KeyType",
            type: 12,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 7,
      type: {
        def: {
          tuple: [0, 8],
        },
      },
    },
    {
      id: 8,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "None",
              },
              {
                fields: [
                  {
                    type: 9,
                  },
                ],
                index: 1,
                name: "Some",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 9,
          },
        ],
        path: ["Option"],
      },
    },
    {
      id: 9,
      type: {
        def: {
          composite: {
            fields: [
              {
                type: 10,
                typeName: "[u8; 32]",
              },
            ],
          },
        },
        path: ["ink_primitives", "types", "AccountId"],
      },
    },
    {
      id: 10,
      type: {
        def: {
          array: {
            len: 32,
            type: 11,
          },
        },
      },
    },
    {
      id: 11,
      type: {
        def: {
          primitive: "u8",
        },
      },
    },
    {
      id: 12,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 13,
          },
          {
            name: "R",
            type: 14,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 13,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 14,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 15,
      type: {
        def: {
          primitive: "u128",
        },
      },
    },
    {
      id: 16,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 15,
          },
          {
            name: "KeyType",
            type: 17,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 17,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 18,
          },
          {
            name: "R",
            type: 19,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 18,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 19,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 20,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 9,
          },
          {
            name: "V",
            type: 15,
          },
          {
            name: "KeyType",
            type: 21,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 21,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 22,
          },
          {
            name: "R",
            type: 23,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 22,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 23,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 24,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "K",
            type: 25,
          },
          {
            name: "V",
            type: 15,
          },
          {
            name: "KeyType",
            type: 26,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 25,
      type: {
        def: {
          tuple: [9, 9],
        },
      },
    },
    {
      id: 26,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 27,
          },
          {
            name: "R",
            type: 28,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 27,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 28,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 29,
      type: {
        def: {
          primitive: "str",
        },
      },
    },
    {
      id: 30,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 31,
          },
          {
            name: "KeyType",
            type: 32,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 31,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "None",
              },
              {
                fields: [
                  {
                    type: 29,
                  },
                ],
                index: 1,
                name: "Some",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 29,
          },
        ],
        path: ["Option"],
      },
    },
    {
      id: 32,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 33,
          },
          {
            name: "R",
            type: 34,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 33,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 34,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 35,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 31,
          },
          {
            name: "KeyType",
            type: 36,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 36,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 37,
          },
          {
            name: "R",
            type: 38,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 37,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 38,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 39,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 11,
          },
          {
            name: "KeyType",
            type: 40,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 40,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 41,
          },
          {
            name: "R",
            type: 42,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 41,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 42,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 43,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 15,
          },
          {
            name: "KeyType",
            type: 44,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 44,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 45,
          },
          {
            name: "R",
            type: 46,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 45,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 46,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 47,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 15,
          },
          {
            name: "KeyType",
            type: 48,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 48,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 49,
          },
          {
            name: "R",
            type: 50,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 49,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 50,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 51,
      type: {
        def: {
          primitive: "u64",
        },
      },
    },
    {
      id: 52,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 51,
          },
          {
            name: "KeyType",
            type: 53,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 53,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 54,
          },
          {
            name: "R",
            type: 55,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 54,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 55,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 56,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "V",
            type: 11,
          },
          {
            name: "KeyType",
            type: 57,
          },
        ],
        path: ["ink_storage", "lazy", "Lazy"],
      },
    },
    {
      id: 57,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 58,
          },
          {
            name: "R",
            type: 59,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
      },
    },
    {
      id: 58,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 59,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 60,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "access",
                type: 61,
                typeName:
                  "<AccessControlData as::ink::storage::traits::AutoStorableHint<::\nink::storage::traits::ManualKey<1771922704u32, ()>,>>::Type",
              },
              {
                name: "psp22",
                type: 62,
                typeName:
                  "<PSP22Data as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<2447852509u32, ()>,>>::Type",
              },
              {
                name: "metadata",
                type: 63,
                typeName:
                  "<PSP22MetadataData as::ink::storage::traits::AutoStorableHint<::\nink::storage::traits::ManualKey<2168396121u32, ()>,>>::Type",
              },
              {
                name: "capped_inflation",
                type: 64,
                typeName:
                  "<CappedInflation as::ink::storage::traits::AutoStorableHint<::ink\n::storage::traits::ManualKey<781910455u32, ()>,>>::Type",
              },
              {
                name: "upgradeable",
                type: 65,
                typeName:
                  "<Reserved as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<2695326056u32, ()>,>>::Type",
              },
            ],
          },
        },
        path: ["abax_token", "abax_token", "AbaxTokenContract"],
      },
    },
    {
      id: 61,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "admin_roles",
                type: 1,
                typeName:
                  "<Mapping<RoleType, RoleType,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_ACCESSCONTROLDATA_ADMIN_ROLES>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n2891666076u32, ()>,>>::Type",
              },
              {
                name: "members",
                type: 6,
                typeName:
                  "<Mapping<(RoleType, Option<AccountId>), (),::ink::storage::traits\n::ManualKey<STORAGE_KEY_ACCESSCONTROLDATA_MEMBERS>> as::ink::storage\n::traits::AutoStorableHint<::ink::storage::traits::ManualKey<\n1717912264u32, ()>,>>::Type",
              },
            ],
          },
        },
        path: [
          "pendzl_contracts",
          "access",
          "access_control",
          "implementation",
          "AccessControlData",
        ],
      },
    },
    {
      id: 62,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "total_supply",
                type: 16,
                typeName:
                  "<::ink::storage::Lazy<Balance,::ink::storage::traits::\nManualKey<STORAGE_KEY_PSP22DATA_TOTAL_SUPPLY>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n2948691470u32, ()>,>>::Type",
              },
              {
                name: "balances",
                type: 20,
                typeName:
                  "<Mapping<AccountId, Balance,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PSP22DATA_BALANCES>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<1170687700u32,\n()>,>>::Type",
              },
              {
                name: "allowances",
                type: 24,
                typeName:
                  "<Mapping<(AccountId, AccountId), Balance,::ink::storage::traits::\nManualKey<STORAGE_KEY_PSP22DATA_ALLOWANCES>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n15709089u32, ()>,>>::Type",
              },
            ],
          },
        },
        path: [
          "pendzl_contracts",
          "token",
          "psp22",
          "implementation",
          "PSP22Data",
        ],
      },
    },
    {
      id: 63,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "name",
                type: 30,
                typeName:
                  "<::ink::storage::Lazy<Option<String>,::ink::storage::traits\n::ManualKey<STORAGE_KEY_PSP22METADATADATA_NAME>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n3194321569u32, ()>,>>::Type",
              },
              {
                name: "symbol",
                type: 35,
                typeName:
                  "<::ink::storage::Lazy<Option<String>,::ink::storage::traits\n::ManualKey<STORAGE_KEY_PSP22METADATADATA_SYMBOL>> as::ink::storage\n::traits::AutoStorableHint<::ink::storage::traits::ManualKey<\n4160644838u32, ()>,>>::Type",
              },
              {
                name: "decimals",
                type: 39,
                typeName:
                  "<::ink::storage::Lazy<u8,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PSP22METADATADATA_DECIMALS>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<506484671u32, ()\n>,>>::Type",
              },
            ],
          },
        },
        path: [
          "pendzl_contracts",
          "token",
          "psp22",
          "extensions",
          "metadata",
          "implementation",
          "PSP22MetadataData",
        ],
      },
    },
    {
      id: 64,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "cap",
                type: 43,
                typeName:
                  "<::ink::storage::Lazy<Balance,::ink::storage::traits::\nManualKey<STORAGE_KEY_CAPPEDINFLATION_CAP>> as::ink::storage::traits\n::AutoStorableHint<::ink::storage::traits::ManualKey<\n2833472755u32, ()>,>>::Type",
              },
              {
                name: "inflation_rate_per_milisecond",
                type: 47,
                typeName:
                  "<::ink::storage::Lazy<Balance,::ink::storage::traits::\nManualKey<STORAGE_KEY_CAPPEDINFLATION_INFLATION_RATE_PER_MILISECOND>> as\n::ink::storage::traits::AutoStorableHint<::ink::storage::traits\n::ManualKey<2839632402u32, ()>,>>::Type",
              },
              {
                name: "last_cap_update",
                type: 52,
                typeName:
                  "<::ink::storage::Lazy<Timestamp,::ink::storage::traits::\nManualKey<STORAGE_KEY_CAPPEDINFLATION_LAST_CAP_UPDATE>> as::ink::\nstorage::traits::AutoStorableHint<::ink::storage::traits::\nManualKey<1017758183u32, ()>,>>::Type",
              },
            ],
          },
        },
        path: [
          "abax_token",
          "modules",
          "capped_inflation",
          "capped_infaltion_storage_field",
          "CappedInflation",
        ],
      },
    },
    {
      id: 65,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "version",
                type: 56,
                typeName:
                  "<::ink::storage::Lazy<u8,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_RESERVED_VERSION>> as::ink::storage::traits::\nAutoStorableHint<::ink::storage::traits::ManualKey<1821155093u32,\n()>,>>::Type",
              },
            ],
          },
        },
        path: [
          "abax_token",
          "modules",
          "capped_inflation",
          "reserved",
          "Reserved",
        ],
      },
    },
    {
      id: 66,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 67,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 67,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 67,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 4,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 68,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 4,
          },
          {
            name: "E",
            type: 68,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 68,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 29,
                    typeName: "String",
                  },
                ],
                index: 0,
                name: "Custom",
              },
              {
                index: 1,
                name: "InsufficientBalance",
              },
              {
                index: 2,
                name: "InsufficientAllowance",
              },
              {
                index: 3,
                name: "ZeroRecipientAddress",
              },
              {
                index: 4,
                name: "ZeroSenderAddress",
              },
              {
                fields: [
                  {
                    type: 29,
                    typeName: "String",
                  },
                ],
                index: 5,
                name: "SafeTransferCheckFailed",
              },
              {
                index: 6,
                name: "PermitInvalidSignature",
              },
              {
                index: 7,
                name: "PermitExpired",
              },
            ],
          },
        },
        path: ["pendzl_contracts", "token", "psp22", "PSP22Error"],
      },
    },
    {
      id: 69,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 1,
                name: "CouldNotReadInput",
              },
            ],
          },
        },
        path: ["ink_primitives", "LangError"],
      },
    },
    {
      id: 70,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 15,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 15,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 71,
      type: {
        def: {
          sequence: {
            type: 11,
          },
        },
      },
    },
    {
      id: 72,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 31,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 31,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 73,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 11,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 11,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 74,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 75,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 75,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 75,
      type: {
        def: {
          primitive: "bool",
        },
      },
    },
    {
      id: 76,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 0,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 0,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 77,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 78,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 78,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 78,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 4,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 79,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 4,
          },
          {
            name: "E",
            type: 79,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 79,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "InvalidCaller",
              },
              {
                index: 1,
                name: "MissingRole",
              },
              {
                index: 2,
                name: "RoleRedundant",
              },
            ],
          },
        },
        path: [
          "pendzl_contracts",
          "access",
          "access_control",
          "AccessControlError",
        ],
      },
    },
    {
      id: 80,
      type: {
        def: {
          composite: {
            fields: [
              {
                type: 10,
                typeName: "[u8; 32]",
              },
            ],
          },
        },
        path: ["ink_primitives", "types", "Hash"],
      },
    },
    {
      id: 81,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 82,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 82,
          },
          {
            name: "E",
            type: 69,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 82,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 4,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 83,
                  },
                ],
                index: 1,
                name: "Err",
              },
            ],
          },
        },
        params: [
          {
            name: "T",
            type: 4,
          },
          {
            name: "E",
            type: 83,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 83,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 29,
                    typeName: "String",
                  },
                ],
                index: 0,
                name: "Custom",
              },
              {
                index: 1,
                name: "SetCodeHashFailed",
              },
              {
                fields: [
                  {
                    type: 29,
                    typeName: "String",
                  },
                ],
                index: 2,
                name: "PermissionError",
              },
            ],
          },
        },
        path: [
          "pendzl_contracts",
          "upgradeability",
          "set_code_hash",
          "SetCodeHashError",
        ],
      },
    },
    {
      id: 84,
      type: {
        def: {
          variant: {},
        },
        path: ["ink_env", "types", "NoChainExtension"],
      },
    },
  ],
  version: 5,
};

const _abi = new Abi(metadata);

export function decodeEvent(bytes: Bytes, topics: Bytes[]): Event {
  return _abi.decodeEvent(bytes, topics);
}

export function decodeMessage(bytes: Bytes): Message {
  return _abi.decodeMessage(bytes);
}

export function decodeConstructor(bytes: Bytes): Constructor {
  return _abi.decodeConstructor(bytes);
}

export interface Chain {
  rpc: {
    call<T = any>(method: string, params?: unknown[]): Promise<T>;
  };
}

export interface ChainContext {
  _chain: Chain;
}

export class Contract {
  constructor(
    private ctx: ChainContext,
    private address: Bytes,
    private blockHash?: Bytes
  ) {}

  AbaxToken_inflation_rate_per_milisecond(): Promise<
    Result<Balance, LangError>
  > {
    return this.stateCall("0x1a49428d", []);
  }

  AbaxToken_cap(): Promise<Result<Balance, LangError>> {
    return this.stateCall("0xead91e26", []);
  }

  PSP22_total_supply(): Promise<Result<Balance, LangError>> {
    return this.stateCall("0x162df8c2", []);
  }

  PSP22_balance_of(owner: AccountId): Promise<Result<Balance, LangError>> {
    return this.stateCall("0x6568382f", [owner]);
  }

  PSP22_allowance(
    owner: AccountId,
    spender: AccountId
  ): Promise<Result<Balance, LangError>> {
    return this.stateCall("0x4d47d921", [owner, spender]);
  }

  PSP22Metadata_token_name(): Promise<Result<String | undefined, LangError>> {
    return this.stateCall("0x3d261bd4", []);
  }

  PSP22Metadata_token_symbol(): Promise<Result<String | undefined, LangError>> {
    return this.stateCall("0x34205be5", []);
  }

  PSP22Metadata_token_decimals(): Promise<Result<u8, LangError>> {
    return this.stateCall("0x7271b782", []);
  }

  AccessControl_has_role(
    role: RoleType,
    address: AccountId | undefined
  ): Promise<Result<boolean, LangError>> {
    return this.stateCall("0xc1d9ac18", [role, address]);
  }

  AccessControl_get_role_admin(
    role: RoleType
  ): Promise<Result<RoleType, LangError>> {
    return this.stateCall("0x83da3bb2", [role]);
  }

  private async stateCall<T>(selector: string, args: any[]): Promise<T> {
    let input = _abi.encodeMessageInput(selector, args);
    let data = encodeCall(this.address, input);
    let result = await this.ctx._chain.rpc.call("state_call", [
      "ContractsApi_call",
      data,
      this.blockHash,
    ]);
    let value = decodeResult(result);
    return _abi.decodeMessageOutput(selector, value);
  }
}

export type RoleType = number;

export type u8 = number;

export type String = string;

export type AccountId = Bytes;

export type LangError = LangError_CouldNotReadInput;

export interface LangError_CouldNotReadInput {
  __kind: "CouldNotReadInput";
}

export type Balance = bigint;

export type Constructor = Constructor_new;

export interface Constructor_new {
  __kind: "new";
  name: String;
  symbol: String;
  decimal: u8;
}

export type Message =
  | Message_AbaxToken_cap
  | Message_AbaxToken_generate
  | Message_AbaxToken_inflation_rate_per_milisecond
  | Message_AccessControl_get_role_admin
  | Message_AccessControl_grant_role
  | Message_AccessControl_has_role
  | Message_AccessControl_renounce_role
  | Message_AccessControl_revoke_role
  | Message_AccessControl_set_role_admin
  | Message_PSP22Metadata_token_decimals
  | Message_PSP22Metadata_token_name
  | Message_PSP22Metadata_token_symbol
  | Message_PSP22Mintable_mint
  | Message_PSP22_allowance
  | Message_PSP22_approve
  | Message_PSP22_balance_of
  | Message_PSP22_decrease_allowance
  | Message_PSP22_increase_allowance
  | Message_PSP22_total_supply
  | Message_PSP22_transfer
  | Message_PSP22_transfer_from
  | Message_SetCodeHash_set_code_hash;

export interface Message_AbaxToken_cap {
  __kind: "AbaxToken_cap";
}

export interface Message_AbaxToken_generate {
  __kind: "AbaxToken_generate";
  to: AccountId;
  amount: Balance;
}

export interface Message_AbaxToken_inflation_rate_per_milisecond {
  __kind: "AbaxToken_inflation_rate_per_milisecond";
}

export interface Message_AccessControl_get_role_admin {
  __kind: "AccessControl_get_role_admin";
  role: RoleType;
}

export interface Message_AccessControl_grant_role {
  __kind: "AccessControl_grant_role";
  role: RoleType;
  account?: AccountId | undefined;
}

export interface Message_AccessControl_has_role {
  __kind: "AccessControl_has_role";
  role: RoleType;
  address?: AccountId | undefined;
}

export interface Message_AccessControl_renounce_role {
  __kind: "AccessControl_renounce_role";
  role: RoleType;
  account?: AccountId | undefined;
}

export interface Message_AccessControl_revoke_role {
  __kind: "AccessControl_revoke_role";
  role: RoleType;
  account?: AccountId | undefined;
}

export interface Message_AccessControl_set_role_admin {
  __kind: "AccessControl_set_role_admin";
  role: RoleType;
  newAdmin: RoleType;
}

export interface Message_PSP22Metadata_token_decimals {
  __kind: "PSP22Metadata_token_decimals";
}

export interface Message_PSP22Metadata_token_name {
  __kind: "PSP22Metadata_token_name";
}

export interface Message_PSP22Metadata_token_symbol {
  __kind: "PSP22Metadata_token_symbol";
}

export interface Message_PSP22Mintable_mint {
  __kind: "PSP22Mintable_mint";
  to: AccountId;
  amount: Balance;
}

export interface Message_PSP22_allowance {
  __kind: "PSP22_allowance";
  owner: AccountId;
  spender: AccountId;
}

export interface Message_PSP22_approve {
  __kind: "PSP22_approve";
  spender: AccountId;
  value: Balance;
}

export interface Message_PSP22_balance_of {
  __kind: "PSP22_balance_of";
  owner: AccountId;
}

export interface Message_PSP22_decrease_allowance {
  __kind: "PSP22_decrease_allowance";
  spender: AccountId;
  deltaValue: Balance;
}

export interface Message_PSP22_increase_allowance {
  __kind: "PSP22_increase_allowance";
  spender: AccountId;
  deltaValue: Balance;
}

export interface Message_PSP22_total_supply {
  __kind: "PSP22_total_supply";
}

export interface Message_PSP22_transfer {
  __kind: "PSP22_transfer";
  to: AccountId;
  value: Balance;
  data: Vec;
}

export interface Message_PSP22_transfer_from {
  __kind: "PSP22_transfer_from";
  from: AccountId;
  to: AccountId;
  value: Balance;
  data: Vec;
}

export interface Message_SetCodeHash_set_code_hash {
  __kind: "SetCodeHash_set_code_hash";
  setCodeHash: Hash;
}

export type Hash = Bytes;

export type Vec = Bytes;

export type Event =
  | Event_Approval
  | Event_CapUpdated
  | Event_RoleAdminChanged
  | Event_RoleGranted
  | Event_RoleRevoked
  | Event_Transfer;

export interface Event_Approval {
  __kind: "Approval";
  /**
   * The account of the token owner.
   */
  owner: AccountId;
  /**
   * The account of the authorized spender.
   */
  spender: AccountId;
  /**
   * The new allowance amount.
   */
  value: Balance;
}

export interface Event_CapUpdated {
  __kind: "CapUpdated";
  cap: Balance;
}

export interface Event_RoleAdminChanged {
  __kind: "RoleAdminChanged";
  /**
   * The `RoleType` for which the admin role is changed. This is the role being modified.
   */
  role: RoleType;
  /**
   * The `RoleType` representing the previous admin role for the `role`. Indicates the admin role before the change.
   */
  previous: RoleType;
  /**
   * The `RoleType` representing the new admin role set for the `role`. Indicates the updated admin role.
   */
  new: RoleType;
}

export interface Event_RoleGranted {
  __kind: "RoleGranted";
  /**
   * The `RoleType` that is granted. This field identifies the specific role being assigned.
   */
  role: RoleType;
  /**
   * The `AccountId` of the account receiving the `role`. Represents the beneficiary of the role assignment.
   */
  grantee?: AccountId | undefined;
  /**
   * The `AccountId` of the account that granted the `role`. This is the account responsible for the role assignment.
   */
  grantor?: AccountId | undefined;
}

export interface Event_RoleRevoked {
  __kind: "RoleRevoked";
  /**
   * The `RoleType` that is revoked. Specifies the role being removed from the account.
   */
  role: RoleType;
  /**
   * The `AccountId` of the account from which the `role` is being removed. Denotes the account losing the role.
   */
  account?: AccountId | undefined;
  /**
   * The `AccountId` of the account that performed the role revocation. Indicates who initiated the removal of the role.
   */
  sender: AccountId;
}

export interface Event_Transfer {
  __kind: "Transfer";
  /**
   * The account from which the tokens are transferred. `None` for minting operations.
   */
  from?: AccountId | undefined;
  /**
   * The account to which the tokens are transferred. `None` for burning operations.
   */
  to?: AccountId | undefined;
  /**
   * The amount of tokens transferred.
   */
  value: Balance;
}

export type Result<T, E> =
  | { __kind: "Ok"; value: T }
  | { __kind: "Err"; value: E };
