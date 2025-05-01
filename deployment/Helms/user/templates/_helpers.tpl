{{/*
Return the fullname of the chart
*/}}
{{- define "login.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}