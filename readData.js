var ss = SpreadsheetApp.openById('1CgJf7BZUz9E6MqwrwWxmABN7EhNb6XF6OCjoscSNnV8')
var sheet = ss.getSheetByName('API')

function doGet(e) {
    let action = e.parameter.action
    if (action == 'readData') {
        return readData(e)
      }
}

function readData(e) {
    const rows = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues()
    const data = []
    for(let i = 0; i < rows.length; i++){
        let row = rows[i]
        let record = {}
        record['no']=row[0]
        record['name']=row[1]
        record['description']=row[2]
        data.push(record)
    }
     let result = JSON.stringify(data)
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON)
}
