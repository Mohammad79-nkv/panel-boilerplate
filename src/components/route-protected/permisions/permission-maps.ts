

export interface IROLES {
    viewer: string;
    editor: string;
    owner: string;
}

export const ROLES :IROLES = {
    viewer: "VIEWER",
    editor: "EDITOR",
    owner: "OWNER"
};

export interface ISCOPES {
    canCreate?: string;
    canEdit?: string;
    canDelete?: string;
    canView?: string;
}

export const SCOPES : ISCOPES = {
    canCreate: "can-create",
    canEdit: "can-edit",
    canDelete: "can-delete",
    canView: "can-view"
};



export const PERMISSIONS  = {
    [ROLES.viewer]: [SCOPES.canView],
    [ROLES.editor]: [SCOPES.canView, SCOPES.canEdit],
    [ROLES.owner]: [
        SCOPES.canView,
        SCOPES.canEdit,
        SCOPES.canCreate,
        SCOPES.canDelete
    ]
};


