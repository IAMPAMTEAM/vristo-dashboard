export interface ICallRecord {
    Type: string;
    ProtocolType: string;
    Protocol: string;
    PortRange: string;
    SrcDst: string;
    Description: string;
    Category: string;
    Manager: string;
    RuleType: string;
    Comment: string;
    DueDate: string;
    CheckType: string;
    CheckDate: string;
}

export interface IAccount {
    GroupName: string;
    GroupId: string;
    VPCId: string;
    Description: string;
    Category: string;
    SGType: string;
    Manager: string;
    RuleType: string;
    Comment: string;
    DueDate: string;
    CheckType: string;
    CheckDate: string;
    Direction: ICallRecord[];
}
