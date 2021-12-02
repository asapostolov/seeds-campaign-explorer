export class InviteEvent {
    public Id: string|null = null
    public Name: string|null = ''
    public Date: Date | null = null
    public Slug: string|null = ''
    public App:InviteApp = InviteApp.Wallet
    public AccountId: string|null = ''
    public Status:InviteEventStatus = InviteEventStatus.Inactive


    public constructor(init?:Partial<InviteEvent>) {
        Object.assign(this, init);
    }
}

enum InviteApp {
    Wallet,
    Passport
}

enum InviteEventStatus{
    Inactive,
    Active
}