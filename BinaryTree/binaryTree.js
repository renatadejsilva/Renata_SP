var NodeBinaryTree = function (_value, _left, _right) {
	this.value = _value;
	this.left = _left;
	this.right = _right;
};

// var n1 = new NodeBinaryTree (1, null, null);
// var n2 = new NodeBinaryTree (2, n1, n3);
// var n3 = new NodeBinaryTree (3, null, null);

var n1 = new NodeBinaryTree (4, null, null);
var n2 = new NodeBinaryTree (8, null, null);
var n3 = new NodeBinaryTree (12, null, null);
var n4 = new NodeBinaryTree (16, null, null);
var n5 = new NodeBinaryTree (6, n1, n2);
var n6 = new NodeBinaryTree (14, n3, n4);
var n7 = new NodeBinaryTree (10, n5, n6);

// tree:
// 				10
// 		6				14		
// 4		8		12		16

// return true since a tree with root is a valid binary search tree
var isValidBST = function(root) {
	return isValidBST(root, null, null);
};

var isValidBST = function(node, min, max) {
	if (node == null) return true;
	if (min != null && !compareMin(node.value, min)) return false;
	if (max != null && !compareMax(node.value, max)) return false;
	return isValidBST(node.left, min, node.value) && isValidBST(node.right, node.value, max);
};

var compareMin = function (value, min) {
	if (value <= min)
		return false;
	return true;
};

var compareMax = function (value, max) {
	if (value >= max)
		return false;
	return true;
};

console.log(isValidBST(n7));
