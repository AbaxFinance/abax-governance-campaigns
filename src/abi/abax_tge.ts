import { Abi, Bytes, encodeCall, decodeResult } from "@subsquid/ink-abi";

export const metadata = {
  source: {
    hash: "0xd2c95a99b329cb6b43cc9c56eb1700dbc48644d890f129f33ab06bd930013b9d",
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
    name: "abax_tge",
    version: "1.0.0",
    authors: [""],
  },
  image: "paritytech/contracts-verifiable:4.1.1",
  spec: {
    constructors: [
      {
        args: [
          {
            label: "start_time",
            type: {
              displayName: ["Timestamp"],
              type: 15,
            },
          },
          {
            label: "phase_two_duration",
            type: {
              displayName: ["Timestamp"],
              type: 15,
            },
          },
          {
            label: "generated_token_address",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "contribution_token_address",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "vester_address",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "founders_address",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "foundation_address",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "strategic_reserves_address",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "phase_one_token_cap",
            type: {
              displayName: ["u128"],
              type: 16,
            },
          },
          {
            label: "cost_to_mint_milliard_tokens",
            type: {
              displayName: ["u128"],
              type: 16,
            },
          },
        ],
        default: false,
        docs: [],
        label: "new",
        payable: false,
        returnType: {
          displayName: ["ink_primitives", "ConstructorResult"],
          type: 46,
        },
        selector: "0x9bae9d5e",
      },
    ],
    docs: [" A contract repsonsible for generating the Abax Token."],
    environment: {
      accountId: {
        displayName: ["AccountId"],
        type: 9,
      },
      balance: {
        displayName: ["Balance"],
        type: 16,
      },
      blockNumber: {
        displayName: ["BlockNumber"],
        type: 0,
      },
      chainExtension: {
        displayName: ["ChainExtension"],
        type: 74,
      },
      hash: {
        displayName: ["Hash"],
        type: 67,
      },
      maxEventTopics: 4,
      staticBufferSize: 16384,
      timestamp: {
        displayName: ["Timestamp"],
        type: 15,
      },
    },
    events: [
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "contributor",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "receiver",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "to_create",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "referrer",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
        ],
        docs: [],
        label: "Contribution",
        module_path: "abax_tge::modules::tge::events",
        signature_topic:
          "0x09c9f10870d40d31bd2e00dcdd473843bbbd2f6226d6e16650526206fc356fd6",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "receiver",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "amount",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "fee_paid",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
        ],
        docs: [],
        label: "Stakedrop",
        module_path: "abax_tge::modules::tge::events",
        signature_topic:
          "0x0f4fb9a57d5e9b962bad8ebd5f696bcfcc8967e74d880d25b643d4d05913cd60",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "multiplier",
            type: {
              displayName: ["u16"],
              type: 17,
            },
          },
        ],
        docs: [],
        label: "BonusMultiplierSet",
        module_path: "abax_tge::modules::tge::events",
        signature_topic:
          "0xfeb0551b761be4d75a51e790ab505b33181bf04fb8c012ed11081ae0c12d7dbd",
      },
      {
        args: [],
        docs: [],
        label: "PhaseChanged",
        module_path: "abax_tge::modules::tge::events",
        signature_topic:
          "0xcc59a84bd5940e7c8499e4de6e247a94899a0f5793a90e20140b4e6a9f4b38e3",
      },
      {
        args: [
          {
            docs: ["The account that triggered the release."],
            indexed: true,
            label: "caller",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: ["The account to which the tokens are sent."],
            indexed: true,
            label: "to",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: ["The locked asset."],
            indexed: true,
            label: "asset",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
          {
            docs: ["The amount of tokens released."],
            indexed: false,
            label: "amount",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
        ],
        docs: ["Emitted when vested tokens are released"],
        label: "TokenReleased",
        module_path: "pendzl_contracts::finance::general_vest",
        signature_topic:
          "0xde8c338ca79d8805352d1d92f36574a15658653f461ebd4f627be5d542e7363b",
      },
      {
        args: [
          {
            docs: [],
            indexed: true,
            label: "creator",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: ["The locked asset."],
            indexed: true,
            label: "asset",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
          {
            docs: ["The account to which the tokens will be sent."],
            indexed: true,
            label: "receiver",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            docs: ["The amount of tokens released."],
            indexed: false,
            label: "amount",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
          {
            docs: [],
            indexed: false,
            label: "schedule",
            type: {
              displayName: ["VestingSchedule"],
              type: 71,
            },
          },
        ],
        docs: ["Emitted when general_vest schedule is created"],
        label: "VestingScheduled",
        module_path: "pendzl_contracts::finance::general_vest",
        signature_topic:
          "0xc5a44e3ce50f6ecdb81b76c25cea0615b745a129563c4ad611b6067ae1e0eb32",
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
              type: 16,
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
              type: 16,
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
    ],
    lang_error: {
      displayName: ["ink", "LangError"],
      type: 47,
    },
    messages: [
      {
        args: [],
        default: false,
        docs: [],
        label: "AbaxTGE::init",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 48,
        },
        selector: "0xe8eac8db",
      },
      {
        args: [
          {
            label: "to_create",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
          {
            label: "receiver",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "referrer",
            type: {
              displayName: ["Option"],
              type: 8,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGE::contribute",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 56,
        },
        selector: "0x3e8af8db",
      },
      {
        args: [
          {
            label: "amount",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
          {
            label: "fee_paid",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
          {
            label: "receiver",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGE::stakedrop",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 48,
        },
        selector: "0x99c5ad21",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGE::collect_reserved",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 56,
        },
        selector: "0x4e5362fc",
      },
      {
        args: [
          {
            label: "contributor",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
          {
            label: "bonus_multiplier_e3",
            type: {
              displayName: ["u16"],
              type: 17,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGE::set_exp_bonus_multiplier_e3",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 48,
        },
        selector: "0x3ce9c9cd",
      },
      {
        args: [
          {
            label: "referrer",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGE::register_referrer",
        mutates: true,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 48,
        },
        selector: "0x635c09b4",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "AbaxTGEView::tge_parameters",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 58,
        },
        selector: "0x154441fd",
      },
      {
        args: [],
        default: false,
        docs: [],
        label: "AbaxTGEView::total_amount_minted",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 60,
        },
        selector: "0xa817b324",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::exp_bonus_multiplier_of_e3",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 61,
        },
        selector: "0x22f57b10",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::contribution_bonus_multiplier_of_e3",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 61,
        },
        selector: "0x5cc6ab8a",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::is_referrer",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 62,
        },
        selector: "0x16b69b52",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::reserved_for",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 60,
        },
        selector: "0xcc97961f",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::contributed_amount_by",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 60,
        },
        selector: "0x01b8fa0d",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::generated_base_amount_by",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 60,
        },
        selector: "0x355173ed",
      },
      {
        args: [
          {
            label: "account",
            type: {
              displayName: ["AccountId"],
              type: 9,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::generated_bonus_amount_by",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 60,
        },
        selector: "0x8c7033fe",
      },
      {
        args: [
          {
            label: "to_create",
            type: {
              displayName: ["Balance"],
              type: 16,
            },
          },
        ],
        default: false,
        docs: [],
        label: "AbaxTGEView::calculate_cost",
        mutates: false,
        payable: false,
        returnType: {
          displayName: ["ink", "MessageResult"],
          type: 60,
        },
        selector: "0x9f8aefd7",
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
          type: 62,
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
          type: 64,
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
          type: 65,
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
          type: 65,
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
          type: 65,
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
          type: 65,
        },
        selector: "0x71a64883",
      },
      {
        args: [
          {
            label: "set_code_hash",
            type: {
              displayName: ["Hash"],
              type: 67,
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
          type: 68,
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
              name: "access_control",
            },
            {
              layout: {
                struct: {
                  fields: [
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 15,
                        },
                      },
                      name: "start_time",
                    },
                    {
                      layout: {
                        enum: {
                          dispatchKey: "0x00000000",
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
                                      key: "0x00000000",
                                      ty: 15,
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
                      name: "phase_two_start_time",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 15,
                        },
                      },
                      name: "phase_two_duration",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 9,
                        },
                      },
                      name: "generated_token_address",
                    },
                    {
                      layout: {
                        struct: {
                          fields: [
                            {
                              layout: {
                                leaf: {
                                  key: "0x00000000",
                                  ty: 9,
                                },
                              },
                              name: "account_id",
                            },
                          ],
                          name: "__ink_TraitCallBuilderPSP22",
                        },
                      },
                      name: "contribution_token",
                    },
                    {
                      layout: {
                        struct: {
                          fields: [
                            {
                              layout: {
                                leaf: {
                                  key: "0x00000000",
                                  ty: 9,
                                },
                              },
                              name: "account_id",
                            },
                          ],
                          name: "__ink_TraitCallBuilderGeneralVest",
                        },
                      },
                      name: "vester",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 9,
                        },
                      },
                      name: "founders_address",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 9,
                        },
                      },
                      name: "foundation_address",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 9,
                        },
                      },
                      name: "strategic_reserves_address",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 16,
                        },
                      },
                      name: "phase_one_token_cap",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 16,
                        },
                      },
                      name: "cost_to_mint_milliard_tokens",
                    },
                    {
                      layout: {
                        leaf: {
                          key: "0x00000000",
                          ty: 16,
                        },
                      },
                      name: "total_amount_minted",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0xa7148a5a",
                              ty: 17,
                            },
                          },
                          root_key: "0xa7148a5a",
                          ty: 18,
                        },
                      },
                      name: "exp_bonus_multiplier_e3_by_address",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x6735ce1e",
                              ty: 16,
                            },
                          },
                          root_key: "0x6735ce1e",
                          ty: 22,
                        },
                      },
                      name: "contributed_amount_by_account",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x8cc89893",
                              ty: 16,
                            },
                          },
                          root_key: "0x8cc89893",
                          ty: 26,
                        },
                      },
                      name: "base_created_by_account",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x4a6f6861",
                              ty: 16,
                            },
                          },
                          root_key: "0x4a6f6861",
                          ty: 30,
                        },
                      },
                      name: "bonus_created_by_account",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x945880b4",
                              ty: 16,
                            },
                          },
                          root_key: "0x945880b4",
                          ty: 34,
                        },
                      },
                      name: "reserved_tokens",
                    },
                    {
                      layout: {
                        root: {
                          layout: {
                            leaf: {
                              key: "0x86ded24e",
                              ty: 4,
                            },
                          },
                          root_key: "0x86ded24e",
                          ty: 38,
                        },
                      },
                      name: "referrers",
                    },
                  ],
                  name: "PublicContributionStorage",
                },
              },
              name: "tge",
            },
          ],
          name: "TGEContract",
        },
      },
      root_key: "0x00000000",
      ty: 42,
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
          primitive: "u64",
        },
      },
    },
    {
      id: 16,
      type: {
        def: {
          primitive: "u128",
        },
      },
    },
    {
      id: 17,
      type: {
        def: {
          primitive: "u16",
        },
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
            name: "K",
            type: 9,
          },
          {
            name: "V",
            type: 17,
          },
          {
            name: "KeyType",
            type: 19,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
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
            name: "L",
            type: 20,
          },
          {
            name: "R",
            type: 21,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
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
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
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
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
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
            name: "K",
            type: 9,
          },
          {
            name: "V",
            type: 16,
          },
          {
            name: "KeyType",
            type: 23,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
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
            name: "L",
            type: 24,
          },
          {
            name: "R",
            type: 25,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
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
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
      },
    },
    {
      id: 25,
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
      id: 26,
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
            type: 16,
          },
          {
            name: "KeyType",
            type: 27,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
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
            name: "L",
            type: 28,
          },
          {
            name: "R",
            type: 29,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
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
      id: 30,
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
            type: 16,
          },
          {
            name: "KeyType",
            type: 31,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
      },
    },
    {
      id: 31,
      type: {
        def: {
          composite: {},
        },
        params: [
          {
            name: "L",
            type: 32,
          },
          {
            name: "R",
            type: 33,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
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
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
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
            name: "K",
            type: 9,
          },
          {
            name: "V",
            type: 16,
          },
          {
            name: "KeyType",
            type: 35,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
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
            name: "L",
            type: 36,
          },
          {
            name: "R",
            type: 37,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
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
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
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
            name: "K",
            type: 9,
          },
          {
            name: "V",
            type: 4,
          },
          {
            name: "KeyType",
            type: 39,
          },
        ],
        path: ["ink_storage", "lazy", "mapping", "Mapping"],
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
            name: "L",
            type: 40,
          },
          {
            name: "R",
            type: 41,
          },
        ],
        path: ["ink_storage_traits", "impls", "ResolverKey"],
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
            name: "ParentKey",
            type: 4,
          },
        ],
        path: ["ink_storage_traits", "impls", "ManualKey"],
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
          composite: {
            fields: [
              {
                name: "access_control",
                type: 43,
                typeName:
                  "<AccessControlData as::ink::storage::traits::AutoStorableHint<::\nink::storage::traits::ManualKey<2649178290u32, ()>,>>::Type",
              },
              {
                name: "tge",
                type: 44,
                typeName:
                  "<PublicContributionStorage as::ink::storage::traits::AutoStorableHint\n<::ink::storage::traits::ManualKey<1016187322u32, ()>,>>::Type",
              },
            ],
          },
        },
        path: ["abax_tge", "abax_tge_contract", "TGEContract"],
      },
    },
    {
      id: 43,
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
      id: 44,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "start_time",
                type: 15,
                typeName:
                  "<Timestamp as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<595444632u32, ()>,>>::Type",
              },
              {
                name: "phase_two_start_time",
                type: 45,
                typeName:
                  "<Option<Timestamp> as::ink::storage::traits::AutoStorableHint<::\nink::storage::traits::ManualKey<3814414010u32, ()>,>>::Type",
              },
              {
                name: "phase_two_duration",
                type: 15,
                typeName:
                  "<Timestamp as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<1857875471u32, ()>,>>::Type",
              },
              {
                name: "generated_token_address",
                type: 9,
                typeName:
                  "<AccountId as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<3473548209u32, ()>,>>::Type",
              },
              {
                name: "contribution_token",
                type: 9,
                typeName:
                  "<PSP22Ref as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<403553657u32, ()>,>>::Type",
              },
              {
                name: "vester",
                type: 9,
                typeName:
                  "<GeneralVestRef as::ink::storage::traits::AutoStorableHint<::ink\n::storage::traits::ManualKey<76934039u32, ()>,>>::Type",
              },
              {
                name: "founders_address",
                type: 9,
                typeName:
                  "<AccountId as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<141345240u32, ()>,>>::Type",
              },
              {
                name: "foundation_address",
                type: 9,
                typeName:
                  "<AccountId as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<368671886u32, ()>,>>::Type",
              },
              {
                name: "strategic_reserves_address",
                type: 9,
                typeName:
                  "<AccountId as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<1578674837u32, ()>,>>::Type",
              },
              {
                name: "phase_one_token_cap",
                type: 16,
                typeName:
                  "<Balance as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<3145174911u32, ()>,>>::Type",
              },
              {
                name: "cost_to_mint_milliard_tokens",
                type: 16,
                typeName:
                  "<u128 as::ink::storage::traits::AutoStorableHint<::ink::storage\n::traits::ManualKey<3302889244u32, ()>,>>::Type",
              },
              {
                name: "total_amount_minted",
                type: 16,
                typeName:
                  "<Balance as::ink::storage::traits::AutoStorableHint<::ink::\nstorage::traits::ManualKey<2437878622u32, ()>,>>::Type",
              },
              {
                name: "exp_bonus_multiplier_e3_by_address",
                type: 18,
                typeName:
                  "<Mapping<AccountId, u16,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PUBLICCONTRIBUTIONSTORAGE_EXP_BONUS_MULTIPLIER_E3_BY_ADDRESS>>\nas::ink::storage::traits::AutoStorableHint<::ink::storage::\ntraits::ManualKey<1172862652u32, ()>,>>::Type",
              },
              {
                name: "contributed_amount_by_account",
                type: 22,
                typeName:
                  "<Mapping<AccountId, Balance,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PUBLICCONTRIBUTIONSTORAGE_CONTRIBUTED_AMOUNT_BY_ACCOUNT>> as::\nink::storage::traits::AutoStorableHint<::ink::storage::traits::\nManualKey<2581529101u32, ()>,>>::Type",
              },
              {
                name: "base_created_by_account",
                type: 26,
                typeName:
                  "<Mapping<AccountId, Balance,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PUBLICCONTRIBUTIONSTORAGE_BASE_CREATED_BY_ACCOUNT>> as::ink::\nstorage::traits::AutoStorableHint<::ink::storage::traits::\nManualKey<3956750023u32, ()>,>>::Type",
              },
              {
                name: "bonus_created_by_account",
                type: 30,
                typeName:
                  "<Mapping<AccountId, Balance,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PUBLICCONTRIBUTIONSTORAGE_BONUS_CREATED_BY_ACCOUNT>> as::ink\n::storage::traits::AutoStorableHint<::ink::storage::traits::\nManualKey<2148838658u32, ()>,>>::Type",
              },
              {
                name: "reserved_tokens",
                type: 34,
                typeName:
                  "<Mapping<AccountId, Balance,::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PUBLICCONTRIBUTIONSTORAGE_RESERVED_TOKENS>> as::ink::storage\n::traits::AutoStorableHint<::ink::storage::traits::ManualKey<\n2496788806u32, ()>,>>::Type",
              },
              {
                name: "referrers",
                type: 38,
                typeName:
                  "<Mapping<AccountId, (),::ink::storage::traits::ManualKey<\nSTORAGE_KEY_PUBLICCONTRIBUTIONSTORAGE_REFERRERS>> as::ink::storage::\ntraits::AutoStorableHint<::ink::storage::traits::ManualKey<\n913713862u32, ()>,>>::Type",
              },
            ],
          },
        },
        path: [
          "abax_tge",
          "modules",
          "tge",
          "storage_fields",
          "public_contribution",
          "PublicContributionStorage",
        ],
      },
    },
    {
      id: 45,
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
                    type: 15,
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
            type: 15,
          },
        ],
        path: ["Option"],
      },
    },
    {
      id: 46,
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
                    type: 47,
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
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 47,
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
      id: 48,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 49,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 49,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 49,
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
                    type: 50,
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
            type: 50,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 50,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 51,
                    typeName: "PSP22Error",
                  },
                ],
                index: 0,
                name: "PSP22Error",
              },
              {
                fields: [
                  {
                    type: 53,
                    typeName: "MathError",
                  },
                ],
                index: 1,
                name: "MathError",
              },
              {
                fields: [
                  {
                    type: 54,
                    typeName: "AccessControlError",
                  },
                ],
                index: 2,
                name: "AccessControlError",
              },
              {
                fields: [
                  {
                    type: 55,
                    typeName: "VestingError",
                  },
                ],
                index: 3,
                name: "CreateVestFailed",
              },
              {
                index: 4,
                name: "AmountLessThanMinimum",
              },
              {
                index: 5,
                name: "TGENotStarted",
              },
              {
                index: 6,
                name: "TGEStarted",
              },
              {
                index: 7,
                name: "TGEEnded",
              },
              {
                index: 8,
                name: "Phase1TokenCapReached",
              },
              {
                index: 9,
                name: "ContributionViaContract",
              },
              {
                index: 10,
                name: "InvalidReferrer",
              },
              {
                index: 11,
                name: "NoReservedTokens",
              },
              {
                index: 12,
                name: "AlreadyInitialized",
              },
            ],
          },
        },
        path: ["abax_tge", "modules", "tge", "errors", "TGEError"],
      },
    },
    {
      id: 51,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 52,
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
                    type: 52,
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
      id: 52,
      type: {
        def: {
          primitive: "str",
        },
      },
    },
    {
      id: 53,
      type: {
        def: {
          variant: {
            variants: [
              {
                index: 0,
                name: "Underflow",
              },
              {
                index: 1,
                name: "Overflow",
              },
              {
                index: 2,
                name: "DivByZero",
              },
            ],
          },
        },
        path: ["pendzl_lang", "math", "errors", "MathError"],
      },
    },
    {
      id: 54,
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
      id: 55,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 52,
                    typeName: "String",
                  },
                ],
                index: 0,
                name: "Custom",
              },
              {
                fields: [
                  {
                    type: 51,
                    typeName: "PSP22Error",
                  },
                ],
                index: 1,
                name: "PSP22Error",
              },
              {
                index: 2,
                name: "NativeTransferFailed",
              },
              {
                index: 3,
                name: "InvalidAmountPaid",
              },
            ],
          },
        },
        path: ["pendzl_contracts", "finance", "general_vest", "VestingError"],
      },
    },
    {
      id: 56,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 57,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 57,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 57,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 50,
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
            type: 16,
          },
          {
            name: "E",
            type: 50,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 58,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 59,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 59,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 59,
      type: {
        def: {
          tuple: [15, 45, 15, 9, 9, 9, 9, 9, 9, 16, 16],
        },
      },
    },
    {
      id: 60,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 16,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 16,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 61,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 17,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 17,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 62,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 63,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 63,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 63,
      type: {
        def: {
          primitive: "bool",
        },
      },
    },
    {
      id: 64,
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
                    type: 47,
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
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 65,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 66,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 66,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
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
                    type: 4,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 54,
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
            type: 54,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 67,
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
      id: 68,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 69,
                  },
                ],
                index: 0,
                name: "Ok",
              },
              {
                fields: [
                  {
                    type: 47,
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
            type: 69,
          },
          {
            name: "E",
            type: 47,
          },
        ],
        path: ["Result"],
      },
    },
    {
      id: 69,
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
                    type: 70,
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
            type: 70,
          },
        ],
        path: ["Result"],
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
                    type: 52,
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
                    type: 52,
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
      id: 71,
      type: {
        def: {
          variant: {
            variants: [
              {
                fields: [
                  {
                    type: 15,
                    typeName: "Timestamp",
                  },
                  {
                    type: 15,
                    typeName: "Timestamp",
                  },
                ],
                index: 0,
                name: "Constant",
              },
              {
                fields: [
                  {
                    type: 72,
                    typeName: "ExternalTimeConstraint",
                  },
                ],
                index: 1,
                name: "External",
              },
            ],
          },
        },
        path: [
          "pendzl_contracts",
          "finance",
          "general_vest",
          "VestingSchedule",
        ],
      },
    },
    {
      id: 72,
      type: {
        def: {
          composite: {
            fields: [
              {
                name: "account",
                type: 9,
                typeName: "AccountId",
              },
              {
                name: "fallback_values",
                type: 73,
                typeName: "(Timestamp, Timestamp)",
              },
            ],
          },
        },
        path: [
          "pendzl_contracts",
          "finance",
          "general_vest",
          "ExternalTimeConstraint",
        ],
      },
    },
    {
      id: 73,
      type: {
        def: {
          tuple: [15, 15],
        },
      },
    },
    {
      id: 74,
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

  AbaxTGEView_tge_parameters(): Promise<
    Result<
      [
        Timestamp,
        Timestamp | undefined,
        Timestamp,
        AccountId,
        AccountId,
        AccountId,
        AccountId,
        AccountId,
        AccountId,
        bigint,
        bigint
      ],
      LangError
    >
  > {
    return this.stateCall("0x154441fd", []);
  }

  AbaxTGEView_total_amount_minted(): Promise<Result<bigint, LangError>> {
    return this.stateCall("0xa817b324", []);
  }

  AbaxTGEView_exp_bonus_multiplier_of_e3(
    account: AccountId
  ): Promise<Result<u16, LangError>> {
    return this.stateCall("0x22f57b10", [account]);
  }

  AbaxTGEView_contribution_bonus_multiplier_of_e3(
    account: AccountId
  ): Promise<Result<u16, LangError>> {
    return this.stateCall("0x5cc6ab8a", [account]);
  }

  AbaxTGEView_is_referrer(
    account: AccountId
  ): Promise<Result<boolean, LangError>> {
    return this.stateCall("0x16b69b52", [account]);
  }

  AbaxTGEView_reserved_for(
    account: AccountId
  ): Promise<Result<bigint, LangError>> {
    return this.stateCall("0xcc97961f", [account]);
  }

  AbaxTGEView_contributed_amount_by(
    account: AccountId
  ): Promise<Result<bigint, LangError>> {
    return this.stateCall("0x01b8fa0d", [account]);
  }

  AbaxTGEView_generated_base_amount_by(
    account: AccountId
  ): Promise<Result<bigint, LangError>> {
    return this.stateCall("0x355173ed", [account]);
  }

  AbaxTGEView_generated_bonus_amount_by(
    account: AccountId
  ): Promise<Result<bigint, LangError>> {
    return this.stateCall("0x8c7033fe", [account]);
  }

  AbaxTGEView_calculate_cost(
    to_create: bigint
  ): Promise<Result<bigint, LangError>> {
    return this.stateCall("0x9f8aefd7", [to_create]);
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

export type u16 = number;

export type LangError = LangError_CouldNotReadInput;

export interface LangError_CouldNotReadInput {
  __kind: "CouldNotReadInput";
}

export type AccountId = Bytes;

export type Timestamp = bigint;

export type Constructor = Constructor_new;

export interface Constructor_new {
  __kind: "new";
  startTime: Timestamp;
  phaseTwoDuration: Timestamp;
  generatedTokenAddress: AccountId;
  contributionTokenAddress: AccountId;
  vesterAddress: AccountId;
  foundersAddress: AccountId;
  foundationAddress: AccountId;
  strategicReservesAddress: AccountId;
  phaseOneTokenCap: bigint;
  costToMintMilliardTokens: bigint;
}

export type Message =
  | Message_AbaxTGEView_calculate_cost
  | Message_AbaxTGEView_contributed_amount_by
  | Message_AbaxTGEView_contribution_bonus_multiplier_of_e3
  | Message_AbaxTGEView_exp_bonus_multiplier_of_e3
  | Message_AbaxTGEView_generated_base_amount_by
  | Message_AbaxTGEView_generated_bonus_amount_by
  | Message_AbaxTGEView_is_referrer
  | Message_AbaxTGEView_reserved_for
  | Message_AbaxTGEView_tge_parameters
  | Message_AbaxTGEView_total_amount_minted
  | Message_AbaxTGE_collect_reserved
  | Message_AbaxTGE_contribute
  | Message_AbaxTGE_init
  | Message_AbaxTGE_register_referrer
  | Message_AbaxTGE_set_exp_bonus_multiplier_e3
  | Message_AbaxTGE_stakedrop
  | Message_AccessControl_get_role_admin
  | Message_AccessControl_grant_role
  | Message_AccessControl_has_role
  | Message_AccessControl_renounce_role
  | Message_AccessControl_revoke_role
  | Message_AccessControl_set_role_admin
  | Message_SetCodeHash_set_code_hash;

export interface Message_AbaxTGEView_calculate_cost {
  __kind: "AbaxTGEView_calculate_cost";
  toCreate: bigint;
}

export interface Message_AbaxTGEView_contributed_amount_by {
  __kind: "AbaxTGEView_contributed_amount_by";
  account: AccountId;
}

export interface Message_AbaxTGEView_contribution_bonus_multiplier_of_e3 {
  __kind: "AbaxTGEView_contribution_bonus_multiplier_of_e3";
  account: AccountId;
}

export interface Message_AbaxTGEView_exp_bonus_multiplier_of_e3 {
  __kind: "AbaxTGEView_exp_bonus_multiplier_of_e3";
  account: AccountId;
}

export interface Message_AbaxTGEView_generated_base_amount_by {
  __kind: "AbaxTGEView_generated_base_amount_by";
  account: AccountId;
}

export interface Message_AbaxTGEView_generated_bonus_amount_by {
  __kind: "AbaxTGEView_generated_bonus_amount_by";
  account: AccountId;
}

export interface Message_AbaxTGEView_is_referrer {
  __kind: "AbaxTGEView_is_referrer";
  account: AccountId;
}

export interface Message_AbaxTGEView_reserved_for {
  __kind: "AbaxTGEView_reserved_for";
  account: AccountId;
}

export interface Message_AbaxTGEView_tge_parameters {
  __kind: "AbaxTGEView_tge_parameters";
}

export interface Message_AbaxTGEView_total_amount_minted {
  __kind: "AbaxTGEView_total_amount_minted";
}

export interface Message_AbaxTGE_collect_reserved {
  __kind: "AbaxTGE_collect_reserved";
  account: AccountId;
}

export interface Message_AbaxTGE_contribute {
  __kind: "AbaxTGE_contribute";
  toCreate: bigint;
  receiver: AccountId;
  referrer?: AccountId | undefined;
}

export interface Message_AbaxTGE_init {
  __kind: "AbaxTGE_init";
}

export interface Message_AbaxTGE_register_referrer {
  __kind: "AbaxTGE_register_referrer";
  referrer: AccountId;
}

export interface Message_AbaxTGE_set_exp_bonus_multiplier_e3 {
  __kind: "AbaxTGE_set_exp_bonus_multiplier_e3";
  contributor: AccountId;
  bonusMultiplierE3: u16;
}

export interface Message_AbaxTGE_stakedrop {
  __kind: "AbaxTGE_stakedrop";
  amount: bigint;
  feePaid: bigint;
  receiver: AccountId;
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

export interface Message_SetCodeHash_set_code_hash {
  __kind: "SetCodeHash_set_code_hash";
  setCodeHash: Hash;
}

export type Hash = Bytes;

export type Event =
  | Event_Approval
  | Event_BonusMultiplierSet
  | Event_Contribution
  | Event_PhaseChanged
  | Event_RoleAdminChanged
  | Event_RoleGranted
  | Event_RoleRevoked
  | Event_Stakedrop
  | Event_TokenReleased
  | Event_Transfer
  | Event_VestingScheduled;

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
  value: bigint;
}

export interface Event_BonusMultiplierSet {
  __kind: "BonusMultiplierSet";
  account: AccountId;
  multiplier: u16;
}

export interface Event_Contribution {
  __kind: "Contribution";
  contributor: AccountId;
  receiver: AccountId;
  toCreate: bigint;
  referrer?: AccountId | undefined;
}

export interface Event_PhaseChanged {
  __kind: "PhaseChanged";
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

export interface Event_Stakedrop {
  __kind: "Stakedrop";
  receiver: AccountId;
  amount: bigint;
  feePaid: bigint;
}

export interface Event_TokenReleased {
  __kind: "TokenReleased";
  /**
   * The account that triggered the release.
   */
  caller: AccountId;
  /**
   * The account to which the tokens are sent.
   */
  to: AccountId;
  /**
   * The locked asset.
   */
  asset?: AccountId | undefined;
  /**
   * The amount of tokens released.
   */
  amount: bigint;
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
  value: bigint;
}

export interface Event_VestingScheduled {
  __kind: "VestingScheduled";
  creator: AccountId;
  /**
   * The locked asset.
   */
  asset?: AccountId | undefined;
  /**
   * The account to which the tokens will be sent.
   */
  receiver: AccountId;
  /**
   * The amount of tokens released.
   */
  amount: bigint;
  schedule: VestingSchedule;
}

export type VestingSchedule =
  | VestingSchedule_Constant
  | VestingSchedule_External;

export interface VestingSchedule_Constant {
  __kind: "Constant";
  value: [Timestamp, Timestamp];
}

export interface VestingSchedule_External {
  __kind: "External";
  value: ExternalTimeConstraint;
}

export interface ExternalTimeConstraint {
  account: AccountId;
  fallbackValues: [Timestamp, Timestamp];
}

export type Result<T, E> =
  | { __kind: "Ok"; value: T }
  | { __kind: "Err"; value: E };
