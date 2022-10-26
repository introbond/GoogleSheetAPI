const ss = SpreadsheetApp.openById('xxx')
const sheet = ss.getSheetByName('xxx')

function doGet(e) {
    let action = e.parameter.action
    if (action == 'readData') {
        return readData(e)
      }
}

function readData(e) {
    let rows = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues()
    let data =[]
    let row = 0
    let record = {}
    for(let i = 0; i < rows.length; i++){
        row = rows[i]
        record['no']=row[0]
        record['name']=row[1]
        record['description']=row[2]
        data.push(record)
    }
     let result = JSON.stringify(data)
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON)
}
