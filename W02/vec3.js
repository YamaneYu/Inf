// Add method
Vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
}
Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}
// Sum method
Vec3.prototype.sum = function()
{
return this.x + this.y + this.z;
}
Vec3.prototype.max = function()
{
    if(this.x>this.y&&this.x>this.z){return this.x}
    else if(this.y>this.z&&this.y>this.x){return this.y}
    else{return this.z}
}

Vec3.prototype.min = function()
{
    if(this.x<this.y&&this.x<this.z){return this.x}
    else if(this.y<this.z&&this.y<this.x){return this.y}
    else{return this.z}
}

Vec3.prototype.min = function()
{
    if(this.x<this.y&&this.x<this.z){return this.x}
    else if(this.y<this.z&&this.y<this.x){return this.y}
    else{return this.z}
}

Vec3.prototype.mid = function()
{
    if(this.min()<=this.x&&this.x<this.max()){return this.x}
    else if(this.min()<=this.y&&this.y<this.max()){return this.y}
    else{return this.z}
}
