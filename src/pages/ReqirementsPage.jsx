"use client"

import { useState } from "react"
import { Search, FileText, ExternalLink, Grid, List } from "lucide-react"
import GetAllDocuments from "../hook/documents/get-all-documents"
import { Button } from "react-bootstrap"



export default function RequirementsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")

  const [documentsData] = GetAllDocuments()
  let user = JSON.parse(localStorage.getItem("user"))
  console.log(user)



  const filteredDocuments = 
    documentsData?.filter((doc) => {
      const matchesSearch = doc?.nameOfDocument.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesSearch 
    })
  


  const getDocumentType = (name) => {
    if (name.includes("Certificate")) return "certificate"
    if (name.includes("Statement")) return "statement"
    if (name.includes("Request")) return "request"
    if (name.includes("Letter")) return "letter"
    if (name.includes("Form")) return "form"
    return "document"
  }

  const getDocumentColor = (type) => {
    const colors = {
      certificate: "bg-emerald-50 border-emerald-200 text-emerald-800",
      statement: "bg-blue-50 border-blue-200 text-blue-800",
      request: "bg-orange-50 border-orange-200 text-orange-800",
      letter: "bg-purple-50 border-purple-200 text-purple-800",
      form: "bg-pink-50 border-pink-200 text-pink-800",
      document: "bg-gray-50 border-gray-200 text-gray-800",
    }
    return colors[type] || colors.document
  }

  const getDocumentTypeLabel = (type) => {
    const labels = {
      certificate: "Certificate",
      statement: "Statement",
      request: "Request",
      letter: "Letter",
      form: "Form",
      document: "Document",
    }
    return labels[type] || labels.document
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">University Documents</h1>
            <p className="text-lg text-gray-600">
              Comprehensive collection of available university documents and certificates
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters and View Toggle */}
            <div className="flex gap-3 items-center">
              {/* Language Filter */}
              

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  className={`p-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-white text-gray-600"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-white text-gray-600"}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          {
            user.role === 1 && <Button className="flex justify-center items-center" href="/addDocument">
              Add Document
            </Button>
          }

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredDocuments.length} of {documentsData.length} documents
          </div>
        </div>
      </div>

      {/* Documents Grid/List */}
      <div className="container mx-auto px-4 py-8">
        {filteredDocuments.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Documents Found</h3>
            <p className="text-gray-500">No documents match your search criteria</p>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
            }
          >
            {filteredDocuments.map((document) => {
              const docType = getDocumentType(document.nameOfDocument)
              const colorClass = getDocumentColor(docType)
              const typeLabel = getDocumentTypeLabel(docType)

              return viewMode === "grid" ? (
                // Grid View Card
                <div
                  key={document.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden group"
                >
                  <div className={`h-2 ${colorClass.split(" ")[0]}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}
                      >
                        <FileText className="h-3 w-3 mr-1" />
                        {typeLabel}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                      {document.nameOfDocument}
                    </h3>

                    <a
                      href={document.linkOfDocument}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group-hover:translate-x-1 transform duration-200"
                    >
                      View Document
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>
              ) : (
                // List View Card
                <div
                  key={document.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}
                      >
                        <FileText className="h-3 w-3 mr-1" />
                        {typeLabel}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{document.nameOfDocument}</h3>
                    </div>

                    <a
                      href={document.linkOfDocument}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors hover:translate-x-1 transform duration-200"
                    >
                      View Document
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">Benha University - Electronic Documents System</p>
        </div>
      </footer>
    </div>
  )
}
