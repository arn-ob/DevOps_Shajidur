provider "aws" {
  region = var.region
  profile = "arn" 
}

module "vpc" {
  source   = "./modules/vpc"
  name     = var.cluster_name
  vpc_cidr = "10.0.0.0/16"
}

module "eks" {
  source       = "./modules/eks"
  region       = var.region
  cluster_name = var.cluster_name
  
  private_subnet_ids = module.vpc.private_subnets
  public_subnet_ids  = module.vpc.public_subnets
  vpc_id             = module.vpc.vpc_id
}