(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{482:function(e,t,o){"use strict";o.r(t);var v=o(42),d=Object(v.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ibm-rse-api-plug-in-for-zowe-cli-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibm-rse-api-plug-in-for-zowe-cli-commands"}},[e._v("#")]),e._v(" IBM RSE API Plug-in for Zowe CLI commands")]),e._v(" "),o("p",[e._v("Refer to the following tables for commands that are available in the IBM® RSE API Plug-in for Zowe™ CLI (RSE CLI plug-in) and their equivalent Zowe CLI z/OSMF commands.")]),e._v(" "),o("h2",{attrs:{id:"uss"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uss"}},[e._v("#")]),e._v(" USS")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("RSE CLI plug-in command")]),e._v(" "),o("th",[e._v("Zowe CLI z/OSMF command")]),e._v(" "),o("th",[e._v("Options")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("RSE API version available")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v('zowe rse ls uss "/u/user"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files ls uss "/u/user"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("List USS files using a path to search.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse create file "/u/user/newFile"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files create file "/u/user/newFile"')])]),e._v(" "),o("td",[o("code",[e._v("--mode")])]),e._v(" "),o("td",[e._v("Create a USS file. "),o("code",[e._v("--mode")]),e._v(" states the permissions of the file. If permissions are not entered, the default will be "),o("code",[e._v("rwxrw-r--")]),e._v(".")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse create dir "/u/user/newDirectory"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files create dir "/u/user/newDirectory"')])]),e._v(" "),o("td",[o("code",[e._v("--mode")])]),e._v(" "),o("td",[e._v("Create a USS directory. "),o("code",[e._v("--mode")]),e._v(" states the permissions of the directory. If permissions are not entered, the default will be "),o("code",[e._v("rwxrw-r--")]),e._v(".")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse del uss "/u/user/fileName"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files del uss "/u/user/fileName"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Delete UNIX files.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse del uss "/u/user/directoryName"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files del uss "/u/user/directoryName"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Delete UNIX directories or folders.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse dl uf "/path/to/fileName"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files dl uf "/path/to/fileName"')])]),e._v(" "),o("td",[o("code",[e._v("-f, -b, --ec")])]),e._v(" "),o("td",[e._v("Download a file from the host to local. To download files to a specific location on local, specify the option "),o("code",[e._v("-f")]),e._v(" followed by a path and file name of location on local. Specify "),o("code",[e._v("-b")]),e._v(" for binary download. The "),o("code",[e._v("--ec")]),e._v(" command is to specify an encoding.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse ul ftu "localFile.txt" "/u/user/fileName"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files ul ftu "localFile.txt" "/u/user/fileName"')])]),e._v(" "),o("td",[o("code",[e._v("-b, --ec")])]),e._v(" "),o("td",[e._v("Upload a local file to USS. Specify "),o("code",[e._v("-b")]),e._v(" for binary download. The "),o("code",[e._v("--ec")]),e._v(" command is to specify an encoding on the host.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse ul dtu "/path/to/localDir" "/path/to/dirName"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files ul dtu "/path/to/localDir" "/path/to/dirName"')])]),e._v(" "),o("td",[o("code",[e._v("-r, -b, --ec")])]),e._v(" "),o("td",[e._v("Upload a directory to USS. To upload the directory recursively, specify the option "),o("code",[e._v("-r")]),e._v(". Specify "),o("code",[e._v("-b")]),e._v(" for binary download. The "),o("code",[e._v("--ec")]),e._v(" command is to specify an encoding on the host.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse rename uss "/u/user/fileName" "newFileName"')])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Rename a UNIX file or directory.")]),e._v(" "),o("td",[e._v("v1.0.0")])])])]),e._v(" "),o("h2",{attrs:{id:"mvs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mvs"}},[e._v("#")]),e._v(" MVS")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("RSE CLI plug-in command")]),e._v(" "),o("th",[e._v("Zowe CLI z/OSMF command")]),e._v(" "),o("th",[e._v("Options")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("RSE API version available")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("zowe rse ls ds filter")])]),e._v(" "),o("td",[o("code",[e._v("zowe files ls ds filter")])]),e._v(" "),o("td",[o("code",[e._v("-a")])]),e._v(" "),o("td",[e._v("List data sets by using a filter to search, for example, "),o("code",[e._v("name")]),e._v(", "),o("code",[e._v("name.*")]),e._v(". To list the data set's attributes, specify the option "),o("code",[e._v("-a")]),e._v(".")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse ls am "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files ls am "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v("--pattern")])]),e._v(" "),o("td",[e._v("List all members of a PDS by using the data set name to search. The "),o("code",[e._v("--pattern")]),e._v(" tag can be used for a member filter search on the data set.")]),e._v(" "),o("td",[o("code",[e._v("--pattern")]),e._v(" v1.0.1")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse create ps "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files create ps "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v("--bs")]),e._v(", "),o("code",[e._v("--db")]),e._v(", "),o("code",[e._v("--dt")]),e._v(", "),o("code",[e._v("--rf")]),e._v(", "),o("code",[e._v("--rl")]),e._v(", "),o("code",[e._v("--ss")]),e._v(", "),o("code",[e._v("--vs")]),e._v(", "),o("code",[e._v("--au")]),e._v(", "),o("code",[e._v("--ab")]),e._v(", "),o("code",[e._v("--ps")])]),e._v(" "),o("td",[e._v("Create a sequential data set (PS). Options include: block size (bs), device type (dt), directory blocks (db), record format (rf), record length (rl), secondary space (ss), allocation unit (au), average block (ab), primary (ps), and volume serial (vs). If no options are specified, a default option will be used.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse create pds "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files create pds "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v("--bs")]),e._v(", "),o("code",[e._v("--db")]),e._v(", "),o("code",[e._v("--dt")]),e._v(", "),o("code",[e._v("--rf")]),e._v(", "),o("code",[e._v("--rl")]),e._v(", "),o("code",[e._v("--ss")]),e._v(", "),o("code",[e._v("--vs")]),e._v(", "),o("code",[e._v("--au")]),e._v(", "),o("code",[e._v("--ab")]),e._v(", "),o("code",[e._v("--ps")])]),e._v(" "),o("td",[e._v("Create a partitioned data set (PO). Options include: block size (bs), device type (dt), directory blocks (db), record format (rf), record length (rl), secondary space (ss), allocation unit (au), average block (ab), primary (ps), and volume serial (vs). If no options are specified, a default option will be used.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse create member "hlq.dsname(newmember)"')])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Create a member for a partitioned data set.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse del ds "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files del ds "hlq.dsname"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Delete sequential (PS) and partitioned (PO) data sets or members.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse dl ds "hlq.dsname(member)"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files dl ds "hlq.dsname(member)"')])]),e._v(" "),o("td",[o("code",[e._v("-f, -b, --ec, -e, --mappings-file")])]),e._v(" "),o("td",[e._v("Download a PS data set or a single member of a PO data set from the host to local. Specify "),o("code",[e._v("-f")]),e._v(" to indicate the path on local to download to. Specify "),o("code",[e._v("-e")]),e._v(" to indicate the extension of the file downloaded on local; if the extension is not indicated, the file will be saved as a text file. Specify "),o("code",[e._v("-b")]),e._v(" for binary download. The "),o("code",[e._v("--ec")]),e._v(" command is to specify an encoding. The "),o("code",[e._v("--mappings-file")]),e._v(" tag will specify location of a non-default mappings file.")]),e._v(" "),o("td",[o("code",[e._v("-b")]),e._v(" available with v1.0.3")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse dl am "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files dl am "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v("-d, -b, --ec, -e, --mappings-file")])]),e._v(" "),o("td",[e._v("Download all members of a PO data set from the host to local. Specify "),o("code",[e._v("-d")]),e._v(" to indicate the directory on local to download to. Specify "),o("code",[e._v("-e")]),e._v(" to indicate the extension of the file downloaded on local; if the extension is not indicated, the file will be saved as a text file. Specify "),o("code",[e._v("-b")]),e._v(" for binary download. The "),o("code",[e._v("--ec")]),e._v(" command is to specify an encoding. The "),o("code",[e._v("--mappings-file")]),e._v(" tag will specify location of a non-default mappings file.")]),e._v(" "),o("td",[o("code",[e._v("-b")]),e._v(" available with v1.0.3")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse ul ftds "localFile.txt" "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files ul ftds "localFile.txt" "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v("--ec, -b, --mappings-file")])]),e._v(" "),o("td",[e._v("Upload a local file to the host as a data set. The "),o("code",[e._v("--ec")]),e._v(" command is to specify an encoding on the host. Specify "),o("code",[e._v("-b")]),e._v(" for binary upload. The "),o("code",[e._v("--mappings-file")]),e._v(" tag will specify location of a non-default mappings file.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse ul dtp "localDirectory" "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files ul dtp "localDirectory" "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v("--ec, -b, --mappings-file")])]),e._v(" "),o("td",[e._v("Upload a directory to a PDS. The "),o("code",[e._v("--ec")]),e._v(" command is to specify an encoding on the host. Specify "),o("code",[e._v("-b")]),e._v(" for binary upload. The "),o("code",[e._v("--mappings-file")]),e._v(" tag will specify location of a non-default mappings file.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse rename data-set "hlq.dsname" "hlq.newdsname"')])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Rename a data set.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse rename data-set-member "hlq.dsname(memberName)" "newMemberName"')])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Rename a data set member.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse migrate data-set "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files migrate data-set "hlq.dsname"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Migrate data sets.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse recall data-set "hlq.dsname"')])]),e._v(" "),o("td",[o("code",[e._v('zowe files recall data-set "hlq.dsname"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Recall migrated data sets.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse copy data-set fromDataSetName toDataSetName")])]),e._v(" "),o("td",[o("code",[e._v("zowe files copy data-set fromDataSetName toDataSetName")])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Copy a data set or data set member to another data set.")]),e._v(" "),o("td",[e._v("v1.0.3")])])])]),e._v(" "),o("h2",{attrs:{id:"jes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jes"}},[e._v("#")]),e._v(" JES")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("RSE CLI plug-in command")]),e._v(" "),o("th",[e._v("Zowe CLI z/OSMF command")]),e._v(" "),o("th",[e._v("Options")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("RSE API version available")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("zowe rse ls js")])]),e._v(" "),o("td",[o("code",[e._v("zowe jobs ls js")])]),e._v(" "),o("td",[o("code",[e._v("-o")]),e._v(", "),o("code",[e._v("-p")]),e._v(", "),o("code",[e._v("-s")])]),e._v(" "),o("td",[e._v("List jobs on JES spool or queues. The option "),o("code",[e._v("-o")]),e._v(" indicates the owner of the jobs. The option "),o("code",[e._v("-p")]),e._v(" indicates the job's name prefix. The option "),o("code",[e._v("-s")]),e._v(" indicates the status of the listed jobs (ALL, ACTIVE, OUTPUT, or INPUT).")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse ls sfbj "jobId"')])]),e._v(" "),o("td",[o("code",[e._v('zowe jobs ls sfbj "jobId"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("List the spool files (DDs) for a z/OS® job on the JES or spool queues for a z/OS job ID.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse delete job "jobId"')])]),e._v(" "),o("td",[o("code",[e._v('zowe jobs delete job "jobId"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Delete a single job by job ID.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse dl o "jobId"')])]),e._v(" "),o("td",[o("code",[e._v('zowe jobs dl o "jobId"')])]),e._v(" "),o("td",[o("code",[e._v("-d")]),e._v(", "),o("code",[e._v("-e")]),e._v(", "),o("code",[e._v("--ojd")])]),e._v(" "),o("td",[e._v("Download job output by job ID. Use the option "),o("code",[e._v("-d")]),e._v(" to specify a local directory for the download. Use the option "),o("code",[e._v("-e")]),e._v(" to specify a files extension to save the job output with. Use the option "),o("code",[e._v("--ojd")]),e._v(" to save the output directly to the specified directory without creating a subdirectory named after the ID of the job.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse submit data-set "hlq.datasetName(jclMember)')])]),e._v(" "),o("td",[o("code",[e._v('zowe jobs submit data-set "hlq.datasetName(jclMember)')])]),e._v(" "),o("td",[o("code",[e._v("--wfo")]),e._v(" , "),o("code",[e._v("--wfa")]),e._v(" , "),o("code",[e._v("--vasc")]),e._v(" , "),o("code",[e._v("-d")]),e._v(" , "),o("code",[e._v("-e")])]),e._v(" "),o("td",[e._v("Submit a JCL job contained in a data set. The data set can be physical sequential or a PDS member.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse submit local-file "path/to/local/file"')])]),e._v(" "),o("td",[o("code",[e._v('zowe jobs submit local-file "path/to/local/file"')])]),e._v(" "),o("td",[o("code",[e._v("--wfo")]),e._v(" , "),o("code",[e._v("--wfa")]),e._v(" , "),o("code",[e._v("--vasc")]),e._v(" , "),o("code",[e._v("-d")]),e._v(" , "),o("code",[e._v("-e")])]),e._v(" "),o("td",[e._v("Submit a JCL job contained in a local file.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse submit stdin")])]),e._v(" "),o("td",[o("code",[e._v("zowe jobs submit stdin")])]),e._v(" "),o("td",[o("code",[e._v("--wfo")]),e._v(" , "),o("code",[e._v("--wfa")]),e._v(" , "),o("code",[e._v("--vasc")]),e._v(" , "),o("code",[e._v("-d")]),e._v(" , "),o("code",[e._v("-e")])]),e._v(" "),o("td",[e._v("Submit a JCL job passed to the command via the stdin stream.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse view job-status-by-jobid JOB00123")])]),e._v(" "),o("td",[o("code",[e._v("zowe jobs view job-status-by-jobid JOB00123")])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("View status details of a single z/OS job on spool or JES queues.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse view spool-file-by-id JOB00123 4")])]),e._v(" "),o("td",[o("code",[e._v("zowe jobs view spool-file-by-id JOB00123 4")])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("View the contents of a spool file from a z/OS job on spool or JES queues.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse cancel job JOB03456")])]),e._v(" "),o("td",[o("code",[e._v("zowe jobs cancel job JOB03456")])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Cancel a single job by job ID.")]),e._v(" "),o("td",[e._v("v1.0.0")])])])]),e._v(" "),o("h2",{attrs:{id:"system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#system"}},[e._v("#")]),e._v(" System")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("RSE CLI plug-in command")]),e._v(" "),o("th",[e._v("Zowe CLI z/OSMF command")]),e._v(" "),o("th",[e._v("Options")]),e._v(" "),o("th",[e._v("Description")]),e._v(" "),o("th",[e._v("RSE API version available")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("zowe rse check status")])]),e._v(" "),o("td",[o("code",[e._v("zowe zosmf check status")])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Get system and API information.")]),e._v(" "),o("td",[e._v("v1.0.1")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse auth login")])]),e._v(" "),o("td",[o("code",[e._v("zowe auth login")])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Log in to an authentication service to obtain a JSON Web Token.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse auth query")])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Get back JSON Web Token information if it is not yet expired.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse auth logout")])]),e._v(" "),o("td",[o("code",[e._v("zowe auth logout")])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Log out of the authentication service and retire the JSON Web Token.")]),e._v(" "),o("td",[e._v("v1.0.3")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse issue command "<COMMAND>"')])]),e._v(" "),o("td",[o("code",[e._v('zowe tso issue command "<COMMAND>"')])]),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Issue a TSO command.")]),e._v(" "),o("td",[e._v("v1.0.1")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v('zowe rse issue unix "<COMMAND>" --cwd "/uss/path/toIssue"')])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Issue a UNIX command.")]),e._v(" "),o("td",[e._v("v1.0.0")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse check conversion-mappings")])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Download Mappings file from RSE API server.")]),e._v(" "),o("td",[e._v("v1.0.3")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("zowe rse change password currentPassword newPassword")])]),e._v(" "),o("td"),e._v(" "),o("td"),e._v(" "),o("td",[e._v("Change z/OS User Password on the Host and update profile's yaml if saved locally.")]),e._v(" "),o("td",[e._v("v1.0.2")])])])])])}),[],!1,null,null,null);t.default=d.exports}}]);