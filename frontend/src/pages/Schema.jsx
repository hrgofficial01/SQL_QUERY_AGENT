import React from "react";

export default function Schema({ schema }) {
  if (!schema || !schema.tables) {
    return <p className="text-gray-500">No schema available.</p>;
  }

  return (
    <div className="space-y-6">
        <div className="bg-white border-b border-gray-200 p-4">
          <h1 className="text-2xl font-bold text-gray-800">Database Schema</h1>
          
        </div>
      {schema.tables.map((table) => (
        <div
          key={table.table_name}
          className="bg-white shadow p-6 rounded-lg border"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            🗂 Table: {table.table_name}
          </h2>

          {/* Columns */}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Columns
          </h3>
          <table className="min-w-full divide-y divide-gray-200 mb-4">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase text-gray-600">
                  Column
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase text-gray-600">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase text-gray-600">
                  Nullable
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase text-gray-600">
                  PK
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium uppercase text-gray-600">
                  Auto Increment
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              {table.columns.map((col) => (
                <tr key={col.column_name}>
                  <td className="px-4 py-2">{col.column_name}</td>
                  <td className="px-4 py-2">{col.data_type}</td>
                  <td className="px-4 py-2">{col.is_nullable}</td>
                  <td className="px-4 py-2">
                    {col.is_primary_key ? "✔" : "—"}
                  </td>
                  <td className="px-4 py-2">
                    {col.is_auto_increment ? "✔" : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Foreign Keys */}
          {table.foreign_keys.length > 0 && (
            <>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Foreign Keys
              </h3>

              <ul className="list-disc pl-6">
                {table.foreign_keys.map((fk, idx) => (
                  <li key={idx}>
                    <strong>{fk.column}</strong> → {fk.references_table}.
                    {fk.references_column}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}