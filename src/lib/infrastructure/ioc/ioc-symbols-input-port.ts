/**
 * @file ioc-symbols-input-port.ts
 * @description This file contains the symbols for the input ports. Input ports are implemented by the use cases.
 */
const INPUT_PORT = {
    DID_META: Symbol.for("DIDMetaInputPort"),
    DID_KEYVALUEPAIRS: Symbol.for("DIDKeyValuePairsDataInputPort"),
    GET_SUBSCRIPTION: Symbol.for("GetSubscriptionInputPort"),
    LOGIN_CONFIG: Symbol.for("LoginConfigInputPort"),
    LIST_DIDS: Symbol.for("ListDIDsInputPort"),
    LIST_DID_RULES: Symbol.for("ListDIDRulesInputPort"),
    LIST_SUBSCRIPTIONS: Symbol.for("ListSubscriptionsInputPort"),
    SET_X509_LOGIN_SESSION: Symbol.for("SetX509LoginSessionInputPort"),
    SITE_HEADER: Symbol.for("SiteHeaderInputPort"),
    STREAM: Symbol.for("StreamInputPort"),
    SWITCH_ACCOUNT: Symbol.for("SwitchAccountInputPort"),
    TEST: Symbol.for("TestInputPort"),
    USERPASS_LOGIN: Symbol.for("UserPassLoginInputPort"),
}

export default INPUT_PORT;
