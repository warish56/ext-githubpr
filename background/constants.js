export const ActionTypes = {
    BG_SAVE_QUERY: "BG_SAVE_QUERY",
    BG_GET_QUERY: "BG_GET_QUERY",
}

export const DbData = {
    dbName: "github_pr",
    dbVersion: 3,
    tables:{
      prs:{
        tableName: "prs",
        keyPath: "id"
      }
    }
  }
  