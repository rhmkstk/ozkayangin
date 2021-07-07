import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE
)

const minifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record))
}

const minifyRecord = (record) => {
  return {
    Id: record.id,
    ...record.fields
  }
}

async function getTable(table) {
  const records = await base(table)
    .select({
      sort: [{ field: 'Order', direction: 'asc' }]
    })
    .all()
  const data = await minifiedRecords(records)
  return data.filter((o) => !o.Draft)
}

export { getTable }
