javascript
import fs from 'fs';

export default async function readmultiplejson(filePaths){
    const jsonData = [];

    for (const filepath of filePaths) {
        const data = await fs.promises.readFile(filePath, 'utf8');
        jsonData.push(JSON.parse(data));
    }
    
    return jsonData;
}