variable "cluster_name" {
  type = string
}

variable "region" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "private_subnet_ids" {
  type = list(string)
}

variable "public_subnet_ids" {
  type = list(string)
}

variable "instance_types" {
  type = list(string)
  default = ["t3.small"]
}

variable "k8s_version" {
  type    = string
  default = "1.33"
}